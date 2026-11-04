# Tela: compartilhamento de tela para dois

Um site de uma página só (`index.html`). Quem transmite escolhe uma tela ou aba, e quem assiste vê em tela cheia, com áudio, direto de um computador para o outro (WebRTC P2P).

## Como funciona

1. Os dois abrem o mesmo site e digitam o **mesmo nome de sala e a mesma senha**.
2. Quem tem a série clica em **Transmitir minha tela**, escolhe a aba ou a tela e **marca "Compartilhar áudio"**.
3. A outra pessoa clica em **Assistir**. Pode entrar antes ou depois; o site espera e conecta sozinho, e reconecta se a internet oscilar.

O vídeo não passa por nenhum servidor nosso. Um servidor público e gratuito (PeerJS) só faz a "apresentação" inicial entre os dois navegadores. A sala é um código gerado a partir do nome + senha, então sem a senha ninguém acha a transmissão.

## Publicar (grátis, uns 5 minutos)

O navegador só deixa capturar a tela em sites **https**, então é preciso hospedar o arquivo. Qualquer uma destas serve:

- **GitHub Pages**: crie um repositório, suba o `index.html`, vá em *Settings → Pages* e escolha a branch `main`. O endereço fica tipo `https://seu-usuario.github.io/tela/`.
- **Netlify** ou **Cloudflare Pages**: crie uma conta e arraste a pasta com o `index.html`.

Para testar no próprio computador antes, `http://localhost` também funciona (ex.: `python -m http.server` na pasta e abrir `http://localhost:8000`).

## Dicas para ficar bom

- **Quem transmite:** use **Chrome ou Edge no computador**. O áudio sai melhor compartilhando uma **aba** (o som da aba vai junto). No Windows também dá para compartilhar a tela inteira com o áudio do sistema; no Mac, o jeito garantido de levar o áudio é compartilhar uma aba.
- **Quem assiste:** qualquer navegador moderno, inclusive celular. Teclas: **F** tela cheia, **M** mudo, **I** mostra a qualidade (resolução, fps, Mbps, se a conexão é direta).
- **Qualidade:** em "Qualidade" na tela inicial dá para escolher 720p/1080p/1440p e a taxa (4 a 25 Mbps). 8 Mbps em 1080p60 fica muito bom e precisa de uns 10 Mbps de **upload** de quem transmite. Se travar, baixe para 4 Mbps ou 1080p30. Cabo de rede ajuda mais que qualquer configuração.
- **Netflix, Prime, Disney+ etc. podem aparecer como tela preta** para quem assiste. É a proteção contra cópia (DRM) desses serviços, e acontece em qualquer app de compartilhamento, inclusive o Discord. Às vezes resolve desativar a "aceleração de hardware" do navegador onde a série está tocando (Configurações → Sistema). Vídeos sem DRM (arquivos no computador, YouTube, etc.) funcionam normalmente.
- **Atraso:** em conexão direta fica normalmente abaixo de meio segundo.

## Se não conectar nunca

Na maioria das internets de casa a conexão direta funciona. Se um dos dois estiver no 4G ou numa rede de empresa/faculdade, pode ser preciso um servidor **TURN** (um "retransmissor"). Crie uma conta gratuita num serviço de TURN (por exemplo, metered.ca), copie o endereço, usuário e senha e cole no `index.html`, no bloco `ICE_SERVERS` lá no começo do script (tem uma linha comentada de exemplo).
