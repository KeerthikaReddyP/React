const Contact=()=>{
    return (
        <div className="m-4 p-4">
            <h1 className="m-2 font-bold text-2xl">Contact Us Page</h1>
            <form>
                <input type="text" placeholder="name" className="border border-black m-4 p-2"/>
                <input type="text" placeholder="message" className="border border-black m-4 p-2"/>
                <button className="m-2 p-2 bg-blue-400 rounded-lg">Submit</button>
            </form>
        </div>
    );
};

export default Contact;