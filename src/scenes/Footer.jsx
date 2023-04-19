import SocialMediaIcons from "../components/SocialMediaIcons";
import React from 'react'

const Footer = () => {
  return (
    <footer className="h-64 bg-red pt-10">
        <div className="w-5/6 mx-auto">
            <SocialMediaIcons />
            <div className="md:flex justify-center md:justify-between  text-center">
                <p className="font-playfair font-semibold text-1xl text-yellow ">Ogu Tony</p>
                <p className="font-playfair text-sm text-yellow"> &#169;2022 TONY. All rights Reserved </p>
            </div>

        </div>
        </footer>
  )
}

export default Footer