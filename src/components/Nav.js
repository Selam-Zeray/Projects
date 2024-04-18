import instagramLogo from '../assets/instagram.png'
const Nav = () =>{
    return (
        <nav>
            <button className="logo">
            {/* <i className='fa-brands fa-instagram'></i> */}
            <img src={instagramLogo} alt="Logo" />
            </button>
            <input type='text' className= "search" placeholder='Search'></input>
            <span className='nav-links'>
{/* -- -----------------------------------------------------------------Buttons-------------------------------------------------------------------> */}
                <button>
                    <i className='fas fa-home' />
                </button>
                <button>
                    <i className='fas fa-comment-alt' />
                </button>
                <button>
                    <i className='fas fa-compass' />
                </button>
                <button>
                    <i className='fas fa-heart' />

                </button>
            </span>
        </nav>
/* -- -----------------------------------------------------------------Buttons-------------------------------------------------------------------> */
    )
};

export default Nav;