export default function NavBar() {
  return (
    <div>
      <nav className="bg-gray-600 ">
        <ul className="p-0 m-0">
          <li className="p-3 inline-block text-amber-50 hover:bg-gray-500 hover:text-gray-900 rounded-[8px]">
            <a href="">Home</a>
          </li>
          <li className="p-3 inline-block text-amber-50 hover:bg-gray-500 rounded-[8px]">
            <a href="">Products</a>
          </li>
          <li className="p-3 inline-block text-amber-50 hover:bg-gray-500 rounded-[8px]">
            <a href="">About us</a>
          </li>
          <li className="p-3 inline-block text-amber-50 hover:bg-gray-500 rounded-[8px]">
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>
      {/* <main>
                    <section className="w-[40%] float-left p-4">
                        <h2 className="text-2xl">This is section</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non quae perferendis, excepturi eligendi asperiores, vel rem corrupti iste itaque cumque quo, eum tempore. Aliquid rerum aliquam deleniti? Ipsam, temporibus eos.</p>
                    </section>
                    <aside className="w-[20%] float-left p-4">
                        <h2 className="text-2xl">This is aside</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta consequuntur dolores tempora modi odio aperiam in soluta deleniti a quaerat aliquid vitae, praesentium architecto nihil, illo quos vel commodi debitis.</p>
                    </aside>
                    <article className="w-[40%] float-left p-4 ">
                        <h2 className="text-2xl">This is article</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi ipsum facere eum qui ea velit minus minima temporibus, quia, error libero aliquid officiis odit nihil dolorum deleniti! Commodi, beatae molestias?
                        Vero ipsum impedit fugit aliquam distinctio at porro sint fugiat commodi consectetur magni temporibus accusamus accusantium modi ipsam quae, reiciendis delectus numquam quos natus quis pariatur libero! Earum, necessitatibus consectetur.
                        </p>
                    </article>
            </main> */}
      <main className="flex flex-wrap flex-col sm:flex-row">
        <section className="sm:w-[40%] w-full p-4">
          <h2 className="text-2xl">This is section</h2>
          <p>...</p>
        </section>
        <aside className="sm:w-[20%] w-full p-4">
          <h2 className="text-2xl">This is aside</h2>
          <p>...</p>
        </aside>
        <article className="sm:w-[40%] w-full p-4">
          <h2 className="text-2xl">This is article</h2>
          <p>...</p>
        </article>
      </main>
    </div>
  );
}
