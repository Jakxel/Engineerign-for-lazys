import "../styles/Sidebar.css";
import profileImg from '../assets/Author.png'

function Sidebar () {
    return (
        <aside>
            <img src={profileImg} alt="AuthorPhoto" />
            <div className="text">
                <p>Made by</p>
                <strong>Jakxel Islas</strong>
            </div>
            <div className="links">
                <li><a href="">Home</a></li>
                <li><a href="#cs-for-lazys">CS for Lazys</a></li>
                <li><a href="#tech-articles">Tech Articles</a></li>
                <li><a href="#other-articles">Other Articles</a></li>
                <li><a href="#all-articles">All Articles</a></li>
                <li><a href="https://jakxel-blog.vercel.app/books">My books</a></li>
                <li><a href="https://jakxel-blog.vercel.app/">Blog</a></li>
                <li><a href="https://jakxel-blog.vercel.app/about">About</a></li>
                <li><a href="https://jakxel-blog.vercel.app/contact">Contact</a></li>
                <li><a href="https://www.linkedin.com/in/victor-jakxel-islas-carreon-b6a156351/">Linkedin</a></li>    
                <li><a href="https://github.com/Jakxel">Github</a></li>
            </div>
            
            <div className="fotter">
                <div className="text2">
                   <li><a href="">Engineering for lazys</a></li>
                    <p> © 2025</p> 
                </div>
                <li className="list-fotter"><a href="">Powered by Vercel</a></li>
            </div>
        </aside>
    )
}
export default Sidebar;