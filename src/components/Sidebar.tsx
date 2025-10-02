import Author from "/Users/jakxel/Developer/Projects/Engineerign-for-lazys/src/assets/Author.png";
import "../styles/Sidebar.css";

function Sidebar () {
    return (
        <aside>
            <img src={Author} alt="author-photo" />
            <div className="text">
                <p>Made by</p>
                <strong>Jakxel Islas</strong>
            </div>
            <div className="links">
                <li><a href="">Home</a></li>
                <li><a href="#recent-articles">Recent Articles</a></li>
                <li><a href="#cs-for-lazys">CS for Lazys</a></li>
                <li><a href="#tech-articles">Tech Articles</a></li>
                <li><a href="#other-articles">Other Articles</a></li>
                <li><a href="#all-articles">All Articles</a></li>
                <li><a href="">My books</a></li>
                <li><a href="">Blog</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="">Linkedin</a></li>    
                <li><a href="">Github</a></li>
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