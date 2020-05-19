let id = 0
let messages = []
module.exports ={
  
    createMessage: (req, res) =>{
        // const {message_id} = req.params
        const {text, time} = req.body
        const newMessage = {id, text, time}


        messages.push(newMessage)
        id++
       res.status(200).send(messages)
    },

    readMessage: (req, res) =>{
        res.status(200).send(messages)
    },

    updateMessage: (req, res) =>{
        const {message_id} = req.params
        const {text, time}= req.body

        const findMessage = messages.findIndex(e=> e.id === +message_id)

        if(findMessage === -1){
            res.status(404).send("Message not located")
        }

        const newText = {id: +message_id, text, time: messages[findMessage].time}

        messages[findMessage] = newText
        
        res.status(200).send(messages)
    },

    deleteMessage: (req, res ) =>{
        const {message_id} = req.params

        const findId = messages.findIndex(e => e.id === +message_id)

        if(findId === -1){
            res.status(404).send("Message not found")
        }

        messages.splice(findId,1)

        res.status(202).send(messages)
    }



}