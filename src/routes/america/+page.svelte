<script>
 import { onMount } from 'svelte';
 import fetchFile from '../../functions/fetchFile'
 import getWordFromUrl from '../../functions/getWordFromUrl'
 import { qnttWord } from '../../functions/qnttWord';
  let fileContent = '';
  let word = '';
  let wordCount = 0;

  function onChangeWord() {
    window.history.pushState(null, null, `/america?q=${word}`);
    wordCount = qnttWord(fileContent, decodeURIComponent(getWordFromUrl())) || qnttWord(fileContent, word);
  }

  onMount(() => {
    word = getWordFromUrl()
    fetchFile('/america.md', word).then(data => {
        fileContent = data.fileContent
        wordCount = qnttWord(data.fileContent, decodeURIComponent(getWordFromUrl())) || qnttWord(data.fileContent, word)
    });
     
  });

</script>

<div id="america">
    <div id="header">
        <a href="/" class="link">Voltar</a>
        <div class="title">AMERICA</div>
        <div></div>
    </div>
     <div id="input-count">
        <div id="input">
            <div id="label">
            Palavra:
            </div>
              <div id="input-counter">
                <input bind:value={word} on:input={onChangeWord} />
                <span>{wordCount && word ? `${wordCount} ocorrências` : ''}</span>
            </div>
        </div>
        
         <div id="text-container">
            <pre id="text">{fileContent}</pre>
         </div>
    </div>
   
</div>

<style>
    #america{
        display: flex;
        flex-direction: column;
        gap: 30px;
    }
    div {
         font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }
    input{
        outline: none;
        outline-style: none;
        border: 1px solid green;
        border-radius: 5px;
        height: 30px;
        padding-left: 5px;
        padding-right: 5px;
        width: 400px;
        display: flex;
    }
    #header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 100px;
    background-color: green;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    padding: 0 15px 0 15px;
  }
  .title{
    width: fit-content;
    color: white;
    text-decoration: none;
    cursor: pointer;
    font-size: 18px;
  }
  #input{
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    align-self: center;
    justify-self: center;
    gap: 10px;
  }
  input:active, input:focus {
   background-color: #FFFAFA;
  }
  #label{
    text-align: left;
  }
  .link{
    width: fit-content;
    color: white;
    text-decoration: none;
    cursor: pointer;
  }
  .link:hover{
    text-decoration: underline;
    transition: all 0.8s ease-out;
    color: #98FB98;
  }
   #input-count{
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-self: center;
    justify-self: center;
    gap: 30px;
    padding: 0 15px 15px 15px;
  }
  #text-container{
    background-color: #DCDCDC;
    border: green 1px solid;
    border-radius: 5px;
  }
  pre {
    font-family: Arial, sans-serif;
    padding: 0 15px 0 15px;
    white-space: pre-wrap;
  }
  #input-counter{
    width: max-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
  }
</style>