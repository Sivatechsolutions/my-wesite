<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;

class EnquiryController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name'     => 'required|string|max:100',
            'phone'    => 'required|string|max:20',
            'email'    => 'nullable|email|max:150',
            'business' => 'required|string|max:150',
            'product'  => 'required|string|max:100',
            'message'  => 'nullable|string',
        ]);

        DB::table('enquiries')->insert([
            'name'       => $validated['name'],
            'phone'      => $validated['phone'],
            'email'      => $validated['email'] ?? null,
            'business'   => $validated['business'],
            'product'    => $validated['product'],
            'message'    => $validated['message'] ?? null,
            'status'     => 'new',
            'source'     => 'product_page',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        try {
            Mail::raw(
                "New Product Enquiry!\n\n" .
                "Product: {$validated['product']}\n" .
                "Name: {$validated['name']}\n" .
                "Phone: {$validated['phone']}\n" .
                "Email: " . ($validated['email'] ?? 'N/A') . "\n" .
                "Business: {$validated['business']}\n" .
                "Message: " . ($validated['message'] ?? 'N/A'),
                function ($message) use ($validated) {
                    $message->to('sivatechsolution2020@gmail.com')
                            ->subject('New Product Enquiry: ' . $validated['product']);
                }
            );
        } catch (\Exception $e) {
            \Log::error('Mail failed: ' . $e->getMessage());
        }

        return response()->json([
            'success' => true,
            'message' => 'Enquiry received!'
        ], 201);
    }
}