<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name'     => 'required|string|max:100',
            'phone'    => 'required|string|max:20',
            'email'    => 'nullable|email|max:150',
            'business' => 'required|string|max:150',
            'location' => 'required|string|max:100',
            'service'  => 'required|string|max:100',
            'budget'   => 'nullable|string|max:50',
            'message'  => 'nullable|string',
        ]);

        DB::table('contacts')->insert([
            'name'       => $validated['name'],
            'phone'      => $validated['phone'],
            'email'      => $validated['email'] ?? null,
            'business'   => $validated['business'],
            'location'   => $validated['location'],
            'service'    => $validated['service'],
            'budget'     => $validated['budget'] ?? null,
            'message'    => $validated['message'] ?? null,
            'status'     => 'new',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        try {
            Mail::raw(
                "New Contact Enquiry!\n\n" .
                "Name: {$validated['name']}\n" .
                "Phone: {$validated['phone']}\n" .
                "Email: " . ($validated['email'] ?? 'N/A') . "\n" .
                "Business: {$validated['business']}\n" .
                "Location: {$validated['location']}\n" .
                "Service: {$validated['service']}\n" .
                "Budget: " . ($validated['budget'] ?? 'N/A') . "\n" .
                "Message: " . ($validated['message'] ?? 'N/A'),
                function ($message) {
                    $message->to('sivatechsolution2020@gmail.com')
                            ->subject('New Contact Enquiry - Siva Tech Solutions');
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