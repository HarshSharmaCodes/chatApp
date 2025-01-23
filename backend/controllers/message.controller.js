export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { id:RecieverId } = req.params;
        const senderId = req.user._id;

    } catch (error) {
        console.log("Error in Message Controller:", error.message)
        res.status(500).json({ error: "Server Error" });
    }
};