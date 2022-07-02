import xsd2json from 'xsd2json';
import fs from 'fs';
import util from 'util';
import { v4 as uuidv4 } from 'uuid';

const convertXsdPromise = util.promisify(xsd2json)

export default defineEventHandler(async (event) => {
  const body = await useBody(event)
  let filePath =`./tmp_files/${uuidv4()}.xsd`
  
  console.debug('writeFileSync', filePath);
  try {
    fs.writeFileSync(filePath, body);
    console.debug('File written', filePath)
  } catch (err) {
    console.error(err);
    return {error: JSON.stringify(err)}
  }
  
  console.debug('STARTING CONVERSION...')

  //filePath = "./tmp_files/temp2.xsd"
  return await convertXsdPromise(filePath, {})
    .then(data => {
      console.log('CONVERSION DONE...')
      console.debug('unlinkSync', filePath)
      fs.unlinkSync(filePath);
      return {
        api: data
      }
    })
    .catch(err => {
      console.debug('unlinkSync', filePath)
      fs.unlinkSync(filePath);
      console.log('CONVERSION ERROR...', err.toString())
      return {
        error: err.toString()
      }
    });

})
