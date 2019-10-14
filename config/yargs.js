const argv = require('yargs').options({
        direccion: {
            alias: '-d',
            desc: 'direccion de la ciudad a obtener el clima',
            demand: true
        }
    })
    .help()
    .argv;
// no se hace con command esta vez ya que se puede usar options que permite poner comandos directamente en la raíz sin necesidad de usar "command"

module.exports = {
    argv
}