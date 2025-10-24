export default async function handler(req, res) {
    const { id, qtd, larg } = req.query
  
    const phone = "5519993723677"
    const apikey = "4661012"
    const text = encodeURIComponent(`🚨 Alerta: item ID ${larg} com baixo estoque (${qtd} unidades)!`)
    const url = `https://api.callmebot.com/whatsapp.php?phone=${phone}&text=${text}&apikey=${apikey}`
  
    try {
      const response = await fetch(url)
      const result = await response.text()
      res.status(200).json({ success: true, result })
    } catch (err) {
      res.status(500).json({ success: false, error: err.message })
    }
  }
  