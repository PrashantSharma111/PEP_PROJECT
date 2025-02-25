import jwt from 'jsonwebtoken'

export const generateToken = (userId, res) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: "7d"
    })


    //send the jwt in the cookie
    res.cookie("jwt", token, {
        maxAge : 7*24*60*60*1000,
        //prevents XSS attacks cross-site scripting attacks (javscript)
        httpOnly: true ,
        //CSRF attacks cross-site request forgery attacks
        sameSite: "strict",
        secure: process.env.NODE_ENV != "development"   
    })

    return token;
}