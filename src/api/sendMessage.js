export default async function handler(req, res) {
    
  
    const phone = "5519993723677"
    const apikey = "4661012"
    const text = encodeURIComponent(`🚨 Alerta: item peca com baixo estoque`)
    const url = `https://api.callmebot.com/whatsapp.php?phone=5519993723677&text=This+is+a+test&apikey=4661012`
  
    try {
      const response = await fetch(url)
      const result = await response.text()
      res.status(200).json({ success: true, result })
    } catch (err) {
      res.status(500).json({ success: false, error: err.message })
    }
  }
  