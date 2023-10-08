export default function CreateListing(){
    function onChange () {}

    return (
        <main className="max-w-md px-2 mx-auto">
            {/* ------------------------------------------------------------------------------ Page title ---------- */}
            <h1
                className="text-3xl text-center mt-6"
            >
                Create a Listing
            </h1>

            {/* ---------- FORM ---------- */}
            <form>
                <p className="text-lg mt-6 font-semibold">Sell / Rent</p>
                <div>
                    <button
                        type="button"
                        id="type"
                        value="sale"
                        onChange={onChange}
                        className={`px-7 py-3  font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full`}
                    >
                        Sell
                    </button>

                </div>
            </form>
        </main>
    )
}