export default function PaymentFail() {
  
  return (
    <div className="container mx-auto max-w-md bg-white shadow-md rounded-lg">
    <div className="text-center mt-10">
      <h1 className="text-2xl font-bold text-red-600">Payment Failed</h1>
      <p className="mt-2">Unfortunately, your payment could not be processed.</p>
      <a href="/" className="text-blue-500 underline mt-4 block">Return to Home</a>
    </div>
    </div>
  );
}
