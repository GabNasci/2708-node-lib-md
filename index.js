import fs from 'fs';
import chalk from 'chalk';
import { get } from 'http';

const textTest = 'São geralmente recuperados a partir de um objeto [FileList](https://developer.mozilla.org/pt-BR/docs/Web/API/FileList) que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento [<input>](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input), a partir do objeto [DataTransfer](https://developer.mozilla.org/pt-BR/docs/Web/API/DataTransfer) utilizado em operações de arrastar e soltar, ou a partir da API `mozGetAsFile()` em um [HTMLCanvasElement](https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLCanvasElement). Em Gecko, códigos com privilégiios podem criar objetos File representando qualquer arquivo local sem a intereção do usuário (veja [Implementation notes](https://developer.mozilla.org/pt-BR/docs/Web/API/File#implementation_notes) para mais informações.).'

function getLinks(text) {
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const captures = text.match(regex);
    console.log(captures);

}

getLinks(textTest);

function treatError(error) {
    console.log(error);
    throw new Error(chalk.red(error.code, 'não há arquivo no diretório'));
    
}

// async/await

async function getFile(FilePath) {
    try {
        const enconding = 'utf-8';
        const text = await fs.promises.readFile(FilePath, enconding)
        console.log(chalk.green(text));
    } catch (error){
        treatError(error)
    }
   
}


// getFile('./arquivos/texto.md');

// \[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)
