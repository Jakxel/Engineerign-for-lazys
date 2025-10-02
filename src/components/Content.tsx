
import "../styles/Content.css"

function Content () {
    return (
        <main>
            {/* Recents Section */}
            <div className="section" id="recent-articles">
                <h1>Recents</h1>
                <div className="article-recent1">
                    <a href="">Latest in AI</a>
                    <p>Discover the newest trends in artificial intelligence</p>
                    <p>12 January 2027</p>
                </div>
                <div className="article-recent2">
                    <a href="">Cloud Computing</a>
                    <p>Introduction to cloud platforms and services</p>
                    <p>28 February 2027</p>
                </div>
            </div>

            {/* CS Topics Section */}
            <div className="section" id="cs-for-lazys">
                <h1>CS Topics</h1>
                <div className="article1">
                    <a href="">Programming paradigms</a>
                    <p>Article part of CS topics based in the different paradigms in programming</p>
                    <p>26 August 2026</p>
                </div>
                <div className="article2">
                    <a href="">Data Structures</a>
                    <p>Overview of essential data structures used in computer science</p>
                    <p>15 September 2026</p>
                </div>
                <div className="article3">
                    <a href="">Algorithms</a>
                    <p>Introduction to algorithms and their applications</p>
                    <p>10 October 2026</p>
                </div>
                <div className="article4">
                    <a href="">Operating Systems</a>
                    <p>Understanding the basics of operating systems</p>
                    <p>5 November 2026</p>
                </div>
                <div className="article5">
                    <a href="">Networks</a>
                    <p>Fundamentals of computer networks and protocols</p>
                    <p>20 December 2026</p>
                </div>
            </div>

            <div className="section" id="tech-articles">
                <h1>Tech Articles</h1>
                <div className="article6">
                    <a href="">Latest in AI</a>
                    <p>Discover the newest trends in artificial intelligence</p>
                    <p>12 January 2027</p>
                </div>
                <div className="article7">
                    <a href="">Cloud Computing</a>
                    <p>Introduction to cloud platforms and services</p>
                    <p>28 February 2027</p>
                </div>
            </div>

            <div className="section" id="other-articles">
                <h1>Other Articles</h1>
                <div className="article8">
                    <a href="">Career Advice</a>
                    <p>Tips and tricks for advancing your tech career</p>
                    <p>15 March 2027</p>
                </div>
                <div className="article9">
                    <a href="">Tech Events</a>
                    <p>Upcoming conferences and meetups</p>
                    <p>30 April 2027</p>
                </div>
            </div>

            {/* All Articles Section */}
            <div className="section" id="all-articles">
                <h1>All Articles</h1>
                <ul>
                    <li><a href="">Programming paradigms</a></li>
                    <li><a href="">Data Structures</a></li>
                    <li><a href="">Algorithms</a></li>
                    <li><a href="">Operating Systems</a></li>
                    <li><a href="">Networks</a></li>
                    <li><a href="">Latest in AI</a></li>
                    <li><a href="">Cloud Computing</a></li>
                    <li><a href="">Career Advice</a></li>
                    <li><a href="">Tech Events</a></li>
                </ul>
            </div>
        </main>
    )
}
export default Content;