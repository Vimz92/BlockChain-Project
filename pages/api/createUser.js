import { client } from "../../lib/sanityClient";

const createUser = (req,res) => {
    try{
        const userDoc= {
            _type: 'users',
            _id: req.body.walletAddress,
            userName :"unnamed",
            address: req.body.walletAddress,
        }

    } catch (error){
        res.status(500).send({message: 'error', data: error.message})
    }
}

export default createUser