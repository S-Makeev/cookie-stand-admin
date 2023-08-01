import Head from 'next/head';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Cookie Stand Admin</title>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.0/tailwind.min.css" rel="stylesheet" />
      </Head>

      <header className="relative flex items-center justify-between p-7 bg-green-500 text-black-80">
        <h1 className="text-5xl">Cookie Stand Admin</h1>
        <div className="absolute top-0 left-0 w-full h-2 bg-black"></div>
      </header>

      <div className="flex-grow container mx-auto height">
        <h2 className="text-3xl mb-4  text-center ">Create Cookie Stand</h2>
        <form action="/create" method="post" className="grid grid-cols-1 gap-4 sm:grid-cols-5">
        <div className="sm:col-span-5">
       <div className="flex items-center">
         <label htmlFor="location" className="text-2xl block mr-2">Location</  label>
            <input type="text" name="location" id="location"    className="w-full px-4 py-2 form-control" />
        </div>
      </div>

          <div className="flex items-center justify-between sm:col-span-4">
            <div className="flex flex-col">
              <label htmlFor="min_customers_per_hour" className="block mb-2 text-center">Minimum Customers per Hour</label>
              <input type="number" name="min_customers_per_hour" id="min_customers_per_hour" className="form-control" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="max_customers_per_hour" className="block mb-2 text-center">Maximum Customers per Hour</label>
              <input type="number" name="max_customers_per_hour" id="max_customers_per_hour" className="form-control" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="average_cookies_per_sale" className="block mb-2 text-center">Average Cookies per Sale</label>
              <input type="number" name="average_cookies_per_sale" id="average_cookies_per_sale" className="form-control" />
            </div>
          </div>

          <div className="flex items-center justify-center sm:col-span-1">
            <button type="submit" className="text-2xl w-40 px-4 py-2 btn btn-primary">Create</button>
          </div>
        </form>
        <div className="mt-12 mb-4 text-center">
        <p className="text-2xl">Report Table Coming Soon</p>
      </div>
      </div>
        
      <footer className="relative p-4 bg-green-500 text-black-10 mt-auto">
        <p className="text-2xl">&copy;{new Date().getFullYear()} </p>
        <div className="absolute left-0 bottom-0 w-full h-2 bg-black"></div>
      </footer>
    </div>
  );
}
