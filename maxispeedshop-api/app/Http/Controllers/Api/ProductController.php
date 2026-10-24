<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function store(Request $request)
    {
        if (!$request->user()->role !== 'admin') {
            return response()->json([
                'message' => 'Unauthorized. Hanya Admin yang dapat masuk',
            ], 403);
        }
    }
    public function index()
    {
        $products = Product::with('category')->get();
        return response()->json([
            'success' => true,
            'message' => 'List Data Products',
            'data' => $products
        ], 200);
    }

    public function show($id)
    {
        $product = Product::with('category')->find($id);

        if (!$product) {
            return response()->json([
                'success' => false,
                'message' => 'Product Not Found',
            ], 404);
        }

        return response()->json([
            'success' => true,
            'message' => 'Detail Data Product',
            'data' => $product
        ], 200);
    }
}