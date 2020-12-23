import React from 'react';


function Nav() {

    const categories=[
        {
            name:"highlights",
            description: "The projects that I've created or are working on"
        },
        {
            name: "resume",
            description: "a listing of my work experience"
        },
        {
            name:"education",
            description: "things I've done to better myself"
        },
    ];

function categorySelected(){
    console.log("This is my profile page!")
}

    return (

      <header>  
          <h2>
          <a data-testid='link' href="/">
              <span role="img" aria-label="sparkles" src="../../assets/images/logo/sparkles_2728.png">✨Jennifer!</span> 
          </a>
          </h2> 
          <nav>
              <ul>
                  <li className="mx-2">
                      <a data-testid='about' href="#about">
                          About Me
                      </a>
                  </li>
                  <li>
                      <span>Contact</span>
                  </li>
                  {categories.map((category)=>(
                      <li className="mx-1"
                      key={category.name}
                      >
                          <span onClick={categorySelected} >{category.name}</span>
                      </li>
                  ))}
              </ul>
          </nav> 
        </header>
    );


}

export default Nav;
