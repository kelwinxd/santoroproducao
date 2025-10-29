import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
 

const Options = document.querySelectorAll(".opcoes ul li")
const Containers = document.querySelectorAll(".containers .cont")
const Links = document.querySelectorAll("header a")
const btnCopy = document.querySelector('.copyc')


const supabaseUrl = 'https://exsnpdmbuscemohjdpus.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV4c25wZG1idXNjZW1vaGpkcHVzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjAzNTc5OTIsImV4cCI6MjA3NTkzMzk5Mn0.kS4VsaFTYID77kEyfd8rtfrEbXlcQDMdNToFxHL4JPc'
const supabase = createClient(supabaseUrl, supabaseKey)

const toolsList = {
  "cnc-t": [
    {
      title: "Fresa Topo 1mm 4 Cortes",
      desc: "Furos de 1mm em Aço",
      link: "https://www.mercadolivre.com.br/fresa-topo-metal-duro-1mm-4-cortes-com-cobertura-hrc55/p/MLB34220363#polycard_client=search-nordic&search_layout=grid&position=11&type=product&tracking_id=c695ca0c-c55d-4690-8231-aee6e71f2500&wid=MLB3796482863&sid=search",
	  img:"./imgs/img-tool.jpg",
	  type:"cnc"
    },
    {
      title: "Fresa Topo Esférica 2mm ",
      desc: "Alargamento de Furos em Aço",
      link: "https://www.mercadolivre.com.br/fresa-topo-esferico-2mm-2-cortes-55hrc-metal-duro-cob-tialn/p/MLB40405202#polycard_client=search-nordic&search_layout=grid&position=14&type=product&tracking_id=da0973f6-785b-4b03-acef-b810a651c83e&wid=MLB5369134248&sid=search",
	  img:"./imgs/img_tool_m2.webp",
	  type:"cnc"
	  
    }
  ],

  "torno-t": [
    {
      title: "Videa Externa 11 x 180°",
      desc: "Usinagem Reta externa",
	  
      link:"https://wa.me/19993723677?text=Ola+tudo+bem?+Gostaria+de+fazer+orçamento+para+uma+Videa+Reta+11x180+para+torno+Zaniboni,+voces+tem+disponivel?",
	  img:"./imgs/img-tool3.jpg",
	   type:"torno"
	  
    },
	{
      title: "Videa Externa V 90°",
      desc: "Usada para Chanfradas",
      link:"https://wa.me/19993723677?text=Ola+tudo+bem?+Gostaria+de+fazer+orçamento+para+uma+Videa+Chanfrada+V90+para+torno+Zaniboni,+voces+tem+disponivel?",
	  img:"./imgs/img-tool4.jpg",
	  type:"torno"
    }
	,
	{
      title: "Videa Externa Abaulada L7.2 R7.6",
      desc: "Usada para Abauladas Tradicionais",
      link:"https://wa.me/19993723677?text=Ola+tudo+bem?+Gostaria+de+fazer+orçamento+para+uma+Videa+Abaulada+L7.2+R7.6+para+torno+Zaniboni,+voces+tem+disponivel?",
	  img:"./imgs/img-tool5.jpg",
	  type:"torno"
    }
	,
	{
      title: "Ponteira de Aço",
      desc: "Expade a pinça afim de prender a aliança",
      link:"https://wa.me/19993723677?text=Ola+tudo+bem?+Gostaria+de+fazer+orçamento+para+uma+Ponteira+de+aço+para+torno+Zaniboni",
	  img:"./imgs/img-tool6.jpg",
	  type:"torno"
    }
	,
	{
      title: "Varão",
      desc: "Expande a ponteira e regula a pressão",
      link:"https://wa.me/19993723677?text=Ola+tudo+bem?+Gostaria+de+fazer+orçamento+para+um+Varão+para+torno+Zaniboni",
	  img:"./imgs/img-tool7.jpg",
	  type:"torno"
    }
  ],

  "acab-t": [
    {
      title: "Fresa Bola 1.6mm",
      desc: "Usadas para alargar furos em alianças de Latão para pedras de 1.5",
      link: "https://www.fornituravirtual.com.br/maquinas-ferramentas-e-insumos/motores-de-chicote-e-insumos/fresa-bola/fresa-bola-importada-005-a-031?variant_id=142",
	  img:"./imgs/img-tool9.webp",
	  type:"acabamento"
    },
	{
      title: "Fresa Bola 1.4mm",
      desc: "Usadas para alargar furos em alianças de Latão para pedras de 1.25",
      link: "https://www.fornituravirtual.com.br/maquinas-ferramentas-e-insumos/motores-de-chicote-e-insumos/fresa-bola/fresa-bola-importada-005-a-031?variant_id=138",
	  img:"./imgs/img-tool9.webp",
	  type:"acabamento"
    },
	,
	{
      title: "Fresa Topo 1.5mm 4 Cortes",
      desc: "Ideal para Gravação em aço inox e latão",
      link: "https://www.mercadolivre.com.br/fresa-topo-metal-duro-15mm-4-cortes-com-cobertura-hrc55/up/MLBU1425688172#polycard_client=search-nordic&search_layout=grid&position=8&type=product&tracking_id=67135a72-002b-41de-91d7-8cf7fb7e1894&wid=MLB2623477387&sid=search",
	  img:"./imgs/img-tool.jpg",
	  type:"gravação"
    },
    {
      title: "Zircônia 1.25mm",
      desc: "Pedras usadas em alianças com mais de 1 pedra, como A6000",
      link: "https://wa.me/19999955933?text=Ola+tudo+bem?+Vocês+tem+disponivel+zirconia+1.25mm?",
	  img:"./imgs/pedras-tool.jpg",
	  type:"cravacao"
    }
  ],
  
  "solda-t": [
    {
      title: "Solda estanho 1mm",
      desc: "Estanho padrão para solda",
      link: "https://www.mercadolivre.com.br/solda-estanho-1mm-60x40-snxpb-c-fluxo-rolo-250g-cobix/p/MLB24431984?pdp_filters=item_id%3AMLB3797265357&from=gshop&matt_tool=48995110&matt_internal_campaign_id=&matt_word=&matt_source=google&matt_campaign_id=22603531562&matt_ad_group_id=181244933895&matt_match_type=&matt_network=g&matt_device=c&matt_creative=758138322200&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=735128761&matt_product_id=MLB24431984-product&matt_product_partition_id=2424443219726&matt_target_id=aud-2009166904988:pla-2424443219726&cq_src=google_ads&cq_cmp=22603531562&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=1&gad_campaignid=22603531562&gbraid=0AAAAAD93qcAdu-kYTX0RmBO1DpF7MWOr6&gclid=CjwKCAjw3tzHBhBREiwAlMJoUsC6CgfvQ9WpsAAXq9bPoP_Gk_vFR7oFsGqBTOQOKoaMJGz7rYkZ6xoC7kUQAvD_BwE#&gid=1&pid=7",
	  img:"./imgs/img-tool8.webp",
	  type:"solda"
    },
	{
      title: "Fluxo para Solda Fria 1L",
      desc: "Fluxo padrão para solda",
      link: "https://api.whatsapp.com/send/?phone=5519983383531&text=Ola+tudo+bem?+Gostaria+de+comprar+Fluxo+para+solda+fria+1L,+voces+tem+disponivel?",
	  img:"./imgs/fluxo-tool.jpg",
	  type:"solda"
    }
  ],
  
  
};


document.addEventListener("DOMContentLoaded", () => {
	Options.forEach((option) => {
		if (option.classList.contains('active')) {
			Containers.forEach((it) => {
		const divData = it.dataset.ni
		if(option.dataset.op === divData ){
			Containers.forEach((item) => {
				item.style.display = 'none'
			})
			it.style.display = 'flex'
			console.log(it)
	}
	})
		}
	
	})
	
	for (const category in toolsList){
		const divsNi = document.querySelector(`[data-ni='${category}']`)
		if(!divsNi) continue
		
		divsNi.innerHTML = ""
		
		toolsList[category].forEach((tool) => {
			const divTool = document.createElement("div")
			divTool.classList.add("card-tool")
			divTool.innerHTML = `<div class="pic-p">
				<img src="${tool.img}" alt="img" /> 
				</div>
		
				<div class="info-card" data-type=${tool.type}>  
				<h1>${tool.title}</h1>

				<p>${tool.desc}</p>

				<div class="t-btns" data-link="${tool.link}">
				<button class="copyc" >Copiar</button>
				<button class="btnSend">Pedir</button>
				</div>
				</div>`;
				divsNi.appendChild(divTool);
		})
	}
	
	document.querySelectorAll('.copyc').forEach(btn => {
  btn.addEventListener('click', async (e) => {
    const button = e.currentTarget;                 // o botão que foi clicado
    const parentDiv = button.closest('.info-card');    // pega o container com data-link
    const myText = parentDiv.querySelector("h1").textContent ?? '';   // link do card

    if (!myText) {
      console.warn('Sem link para copiar');
      return;
    }

    try {
      await navigator.clipboard.writeText(myText);
      console.log('Texto copiado com sucesso!');

      // altera somente o botão clicado
      button.textContent = "Copiado!";
      button.setAttribute("disabled", "disabled");

      setTimeout(() => {
        button.textContent = "Copiar";
        button.removeAttribute("disabled");
      }, 1000);
    } catch (err) {
      console.error('Falha ao copiar o texto: ', err);
    }
  });
});

// === 2) listeners para os botões de enviar (WhatsApp) ===
/*
document.querySelectorAll('.btnSend').forEach(btn => {
  btn.addEventListener('click', async (e) => {
    const button = e.currentTarget;
    const parentDiv = button.closest('.t-btns');
    const link = parentDiv?.dataset.link ?? '';

    if (!link) {
      alert('Sem link para enviar');
      return;
    }

    // opcional: copiar para clipboard
    try {
      await navigator.clipboard.writeText(link);
      console.log('Link copiado para o clipboard!');
    } catch (err) {
      console.error('Erro ao copiar o link: ', err);
    }

    // abrir WhatsApp
    const phoneNumber = '5519993723677';
    const message = encodeURIComponent(`Oi! Dá uma olhada nesse link: ${link}`);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappURL, '_blank');
  }); 
});
	*/
	let chart = [];
	let chartLink = [];
	const chartDiv = document.querySelector(".chart")
	const modalChart = document.querySelector('.modal-chart')
  const btnListCp = document.querySelector(".btnCp-list")

 
	
	document.querySelectorAll('.btnSend').forEach(btn => {
  btn.addEventListener('click', async (e) => {
  const prod = e.currentTarget.closest('.info-card');
  const prodLink = e.currentTarget.closest('[data-link]').dataset.link;

  const exists = chart.includes(prod);
  if (!exists) {
    chart.push(prod);
    btn.textContent = "Pedido!";
    btn.disabled = true;

  }

  btnListCp.addEventListener('click', async (e) => {
     e.preventDefault()
     const myText = Array.from(chart).map((i) => {
      return i.querySelector("h1")?.textContent
     }).join(", ")
     console.log(myText)


    if (!myText) {
      console.warn('Sem link para copiar');
      return;
    }

    try {
      await navigator.clipboard.writeText(myText);
      console.log('Texto copiado com sucesso!');

      // altera somente o botão clicado
      btnListCp.textContent = "Copiado!";
      btnListCp.setAttribute("disabled", "disabled");

      setTimeout(() => {
        btnListCp.textContent = "Copiar Lista";
        btnListCp.removeAttribute("disabled");
      }, 1000);
    } catch (err) {
      console.error('Falha ao copiar o texto: ', err);
    }
  });

  const exists2 = chartLink.includes(prodLink);
  if (!exists2) {
    chartLink.push(prodLink);
  }

  renderModalList();
  document.querySelector(".chart p").textContent = chart.length
});



function renderModalList() {
  let uniqueList = [...new Set(chart)];
  const listPM = document.querySelector('.lista-pm');
  listPM.innerHTML = "";

  uniqueList.forEach((i) => {
    const item = document.createElement('div');
    const divBtns = document.createElement("div");
    const info = document.createElement('p');
    const link = document.createElement('a');
    const whats = document.createElement('a');
    const closeInfo = document.createElement("button");

    item.classList.add("info-modal");
    divBtns.classList.add("btns-modal");
    closeInfo.classList.add("close-im");

    const title = i.querySelector('h1').textContent;
    let linkHref = i.querySelector('.t-btns').dataset.link;

    info.textContent = title;
    link.textContent = "Fornecedor";
    link.target = "_blank";
    link.href = linkHref;

    const phoneNumber = '5519993723677';
	if(i.dataset.type == "torno"){
		console.log(i)
		linkHref = i.querySelector("h1").textContent
	} else if (i.dataset.type == "cravacao"){
    linkHref = i.querySelector("h1").textContent
  }
  
  else {
		linkHref = i.querySelector('.t-btns').dataset.link;
	}
    let message = encodeURIComponent(`Oi! Vamos precisar dessa ferramenta para ${i.dataset.type}: ${linkHref}`);
    whats.href = `https://wa.me/${phoneNumber}?text=${message}`;
    whats.target = "_blank";
    whats.textContent = "Admin";

    whats.addEventListener("click", async () => {
      const nomeProduto = title; // pega o nome do produto
      const agora = new Date();
      const dataLocal = agora.toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });
      
      try {
        const { error } = await supabase
          .from("pedidos")
          .insert([
            {
              data_pedido: dataLocal,
              pedido: nomeProduto
            }
          ]);

          console.log("clicou adm")
    
        if (error) {
          console.error("Erro ao registrar pedido:", error.message);
        } else {
          console.log("✅ Pedido registrado com sucesso!");
        }
      } catch (err) {
        console.error("Erro inesperado ao registrar pedido:", err);
      }
    });

    closeInfo.textContent = "X";
	
 
    closeInfo.addEventListener("click", () => {
	   document.querySelectorAll(".info-card").forEach((a) => {
		   
		  if(a.querySelector("h1").textContent == title){
			  a.querySelector(".btnSend").textContent = "Pedir"
			  a.querySelector(".btnSend").removeAttribute("disabled")
			  
		  }
	  })
      chart = chart.filter(el => el.querySelector('h1').textContent !== title);
	 

      renderModalList();
	   document.querySelector(".chart p").textContent = chart.length
    });

    divBtns.appendChild(link);
    divBtns.appendChild(whats);
    item.appendChild(info);
    item.appendChild(divBtns);
    item.appendChild(closeInfo);
    listPM.appendChild(item);
  });
}
  

	
})



const overlayModalMC = document.querySelector('.overlay-mc')


chartDiv.addEventListener("click", () => {
	

	overlayModalMC.style.display = 'block';
	modalChart.style.display = 'block';
})
const closeModalC = document.querySelector(".close-mc")

closeModalC.addEventListener("click", () => {
	
	console.log('fechou')
	
	overlayModalMC.style.display = 'none';
	modalChart.style.display = 'none';
})


})










Options.forEach((option) => {
option.addEventListener('click', function (e){
	Options.forEach((op) => {
		op.classList.remove('active')
	})
	let liTarget = e.target
	liTarget.classList.add('active')
	Containers.forEach((it) => {
		const divData = it.dataset.ni
		if(liTarget.dataset.op === divData ){
			Containers.forEach((item) => {
				item.style.display = 'none'
			})
			it.style.display = 'flex'
			console.log(it)
	}
	})
	
	
})
  
});


const mobMenu = document.querySelector(".menu-h")
const mobList = document.querySelector('.list-h')
const closeMenu = document.querySelector(".close-h")
mobMenu.addEventListener('click', () => {

	mobList.classList.add('active')

})

closeMenu.addEventListener('click', () => {

	mobList.classList.remove('active')

})


const btnCopyCont = document.querySelectorAll(".cp-cont")

btnCopyCont.forEach(btn => {
  btn.addEventListener('click', async (e) => {
    const button = e.currentTarget;                 // o botão que foi clicado
    const parentDiv = button.closest('.info-contato');    // pega o container com data-link
    const myText = parentDiv.querySelector("span").textContent ?? '';   // link do card

    if (!myText) {
      console.warn('Sem link para copiar');
      return;
    }

    try {
      await navigator.clipboard.writeText(myText);
      console.log('Texto copiado com sucesso!');

      // altera somente o botão clicado
     
      button.setAttribute("disabled", "disabled");

      setTimeout(() => {
        
        button.removeAttribute("disabled");
      }, 1000);
    } catch (err) {
      console.error('Falha ao copiar o texto: ', err);
    }
  });
});







