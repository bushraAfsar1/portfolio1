
const Contact = () => {
    return (
      <>
        <main className="container mx-auto px-4 py-16">
          <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
          <p>Email: naazbushra16@gmail.com</p>
          <form className="max-w-md mx-auto space-y-4">
            <input type="text" placeholder="Name" className="w-full p-3 border rounded-md" />
            <input type="email" placeholder="Email" className="w-full p-3 border rounded-md" />
            <textarea placeholder="Message" className="w-full p-3 border rounded-md"></textarea>
            <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-md">Send Message</button>
          </form>
        </main>
      </>
    );
  };
  
  export default Contact;