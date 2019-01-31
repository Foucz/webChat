var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () =>{
  it('should generate correct message', ()=>{
    var from = 'Jan';
    var text = 'Jakos wiadomosc';
    var message = generateMessage(from,text);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from,text});

  });

})
