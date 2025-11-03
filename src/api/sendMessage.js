export default async function handler(req, res) {
    
    const {larg, AroPeca} = req.query
    const phone = "5519993723677"
    const apikey = "4661012"
    const text = encodeURIComponent(`🚨 Alerta: Alianca de ${larg} Aro ${AroPeca} está com baixo estoque`)
    const url = `https://api.callmebot.com/whatsapp.php?phone=5519993723677&text=${text}&apikey=4661012`
  
    try {
      const response = await fetch(url)
      const result = await response.text()
      if (result.toLowerCase().includes("message queued") || result.toLowerCase().includes("ok")) {
        res.status(200).json({ success: true, result })
      } else {
        res.status(500).json({ success: false, error: result })
      }
      
    } catch (err) {
      res.status(500).json({ success: false, error: err.message })
    }
  }
  