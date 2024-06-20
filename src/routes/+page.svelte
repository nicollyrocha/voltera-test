<div id="body">
<div id="header">
    <a class="link" href="/markdown">
            Markdown
    </a>
   <a class="link" href="/america">
        America
   </a>
   <a class="link" href="/tipografia">
        Tipografia
   </a>
</div>
    <img alt="logo" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYQx3R-9vcjHX3PvxjKvvriOBrKfZl6sMKfA&s' />
</div>

<style>
    #body{
        display: flex;
        flex-direction: column;
        margin: 0;
        padding: 0;
    }
    img{
        width: 700px;
        display: flex;
        align-self: center;
        justify-self: center;
        margin-top: 15%;
    }
  #header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    height: 100px;
    background-color: green;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }
  .link{
    width: fit-content;
    color: white;
    text-decoration: none;
    cursor: pointer;
    font-size: 18px;
  }
  .link:hover{
    text-decoration: underline;
    transition: all 0.8s ease-out;
    color: #98FB98;
  }
</style>