// req = HTTP incoming message, res = HTTP serverresponse
export default function handler (req, res){
    res.status(200).json({ text= 'Hello' })
}