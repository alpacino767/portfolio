const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
        <a className="hover:opacity-50 transition duration-500"
             href="https://www.linkedin.com/in/ogu-anthony-43b497269/"
             target="_blank"
             rel="noreferrer"

             >
            <img alt="linkedin-link" src="../assets/linkedin.png"></img>

        </a>
        {/* <a className="hover:opacity-50 transition duration-500"
             href="https://twitter.com/__tonero"
             target="_blank"
             rel="noreferrer"

             >
            <img alt="twitter-link" src="../assets/twitter.png"></img>

        </a> */}
        {/* <a className="hover:opacity-50 transition duration-500"
             href="https://www.instagram.com"
             target="_blank"
             rel="noreferrer"

             >
            <img alt="instagram-link" src="../assets/instagram.png"></img>

        </a> */}
        <a className="hover:opacity-50 transition duration-500"
             href="https://www.github.com"
             target="_blank"
             rel="noreferrer"

             >
            <img alt="github-link" src="../assets/github.png"></img>

        </a>
  

    </div>
  )
}

export default SocialMediaIcons