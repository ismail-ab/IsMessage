export interface IMessage {
  id: string;
  fromRecipient: boolean;
  message: string;
}

export interface IConversation {
  id: string;
  picture: string;
  name: string;
  phone: string;
  messages: IMessage[];
}

export const conversations: IConversation[] = [
  {
    id: '1',
    picture: 'http://placekitten.com/200/300',
    name: 'Wilma Hardy',
    phone: '+1 (891) 578-3053',
    messages: [
      {
        id: '60ec5228a09032052dfe6b9a',
        fromRecipient: false,
        message:
          'Velit do do deserunt eiusmod anim incididunt consectetur excepteur laborum ad ullamco enim dolore in.',
      },
      {
        id: '60ec522830c265b590ab142d',
        fromRecipient: false,
        message: 'Ut aliquip occaecat ullamco qui.',
      },
      {
        id: '60ec52281e9d209399e2a0d5',
        fromRecipient: false,
        message:
          'Nostrud sunt proident fugiat exercitation commodo deserunt quis sint cupidatat.',
      },
      {
        id: '60ec522808e74d22b386fbb2',
        fromRecipient: false,
        message: 'Ad sint in nisi ipsum laborum ut.',
      },
      {
        id: '60ec52283585124fbcc74027',
        fromRecipient: false,
        message:
          'Aute fugiat labore ea excepteur deserunt minim occaecat laboris id aliquip duis aliqua cillum proident.',
      },
      {
        id: '60ec52288ea3cf6d0104392f',
        fromRecipient: false,
        message:
          'Laborum dolor reprehenderit occaecat cupidatat ea adipisicing dolor occaecat adipisicing do.',
      },
      {
        id: '60ec52289d71a4641d433028',
        fromRecipient: true,
        message:
          'Esse dolore cillum consectetur labore consectetur elit quis excepteur culpa excepteur aliquip.',
      },
      {
        id: '60ec52284115524c53352560',
        fromRecipient: false,
        message: 'Mollit magna minim laboris pariatur.',
      },
      {
        id: '60ec5228f7c430195ed4c432',
        fromRecipient: false,
        message:
          'Incididunt magna dolore consectetur laborum do ea id proident labore.',
      },
      {
        id: '60ec52281c7358acc44fda9a',
        fromRecipient: true,
        message: 'Aute ipsum eiusmod amet nisi consequat ad sunt dolor.',
      },
      {
        id: '60ec522863714643a7cf387c',
        fromRecipient: true,
        message:
          'Ad magna mollit adipisicing enim voluptate est fugiat exercitation nisi magna.',
      },
      {
        id: '60ec522828702225edeb1cd3',
        fromRecipient: true,
        message: 'Eiusmod id id in cillum nulla.',
      },
      {
        id: '60ec5228d32709ed20034770',
        fromRecipient: true,
        message:
          'Deserunt sunt nisi duis non excepteur sint sunt dolor laboris laborum exercitation eu ea veniam.',
      },
      {
        id: '60ec522856c025019044352c',
        fromRecipient: false,
        message: 'Quis dolor tempor non do culpa mollit.',
      },
    ],
  },
  {
    id: '60ec52288a58882774d64667',
    picture: 'http://placekitten.com/200/300',
    name: 'Richardson Keith',
    phone: '+1 (877) 550-2091',
    messages: [
      {
        id: '60ec5228ebde85c0cec2a9de',
        fromRecipient: false,
        message: 'Minim anim enim dolor cillum fugiat.',
      },
      {
        id: '60ec5228170077ba785f55a1',
        fromRecipient: true,
        message:
          'Nulla aute non enim eu nostrud qui officia laboris consequat pariatur veniam amet in.',
      },
      {
        id: '60ec5228a8ff35efb9da6838',
        fromRecipient: false,
        message:
          'Ea ullamco Lorem magna excepteur ullamco veniam ipsum non sint cupidatat.',
      },
      {
        id: '60ec5228cf94e90ff58f315d',
        fromRecipient: true,
        message:
          'Deserunt pariatur nostrud quis aliquip amet esse duis nisi ut quis pariatur.',
      },
      {
        id: '60ec52282b05bf41fabc319b',
        fromRecipient: false,
        message: 'Non mollit incididunt velit duis ad qui sunt.',
      },
      {
        id: '60ec52284c4853fc2dbd86df',
        fromRecipient: true,
        message: 'Dolore enim duis in consectetur ea velit do sit dolor.',
      },
      {
        id: '60ec52281a18fd9a0fc92924',
        fromRecipient: true,
        message:
          'Adipisicing deserunt ipsum non ea excepteur adipisicing laboris in quis ex.',
      },
      {
        id: '60ec522894e041024c5d097a',
        fromRecipient: false,
        message: 'Id aute laboris in qui culpa.',
      },
      {
        id: '60ec52286ba0142419b3f6c2',
        fromRecipient: false,
        message:
          'Ipsum laborum amet amet elit do nisi ipsum tempor dolore eiusmod deserunt officia nostrud consectetur.',
      },
      {
        id: '60ec52281a20a02dcfc1315a',
        fromRecipient: true,
        message: 'Id pariatur deserunt labore id aliqua.',
      },
      {
        id: '60ec52280820b28c6273a45e',
        fromRecipient: true,
        message:
          'Commodo aute aute ea laborum ut ea esse sit nulla dolor sit reprehenderit.',
      },
      {
        id: '60ec5228f3429dc6e83f5828',
        fromRecipient: false,
        message:
          'Anim veniam aliqua aute sint veniam cupidatat dolor dolore exercitation anim ut do exercitation.',
      },
      {
        id: '60ec52282588ae1610f3363f',
        fromRecipient: true,
        message:
          'Quis fugiat elit ad pariatur ea fugiat enim id proident in dolore.',
      },
    ],
  },
  {
    id: '60ec5228c0e674269b8d2761',
    picture: 'http://placekitten.com/200/300',
    name: 'Susana Hayden',
    phone: '+1 (810) 409-3705',
    messages: [
      {
        id: '60ec5228854ec8af1398e018',
        fromRecipient: false,
        message:
          'Qui exercitation elit veniam eu ex adipisicing officia adipisicing reprehenderit esse proident.',
      },
      {
        id: '60ec5228bb0a391811a30dd1',
        fromRecipient: true,
        message:
          'Incididunt deserunt Lorem eiusmod ipsum adipisicing tempor ad ut exercitation commodo.',
      },
      {
        id: '60ec5228a0451407ab979118',
        fromRecipient: true,
        message:
          'Aliquip cupidatat reprehenderit cupidatat culpa non officia minim occaecat aute non fugiat ex.',
      },
      {
        id: '60ec5228af3eab60fd0c74f0',
        fromRecipient: false,
        message: 'Fugiat eu qui minim officia minim nisi.',
      },
      {
        id: '60ec5228dfb14047dc8daa30',
        fromRecipient: true,
        message: 'Mollit est irure adipisicing occaecat dolor ipsum sunt.',
      },
    ],
  },
  {
    id: '60ec52289ca570cb997aa7be',
    picture: 'http://placekitten.com/200/300',
    name: 'Gabriela Fox',
    phone: '+1 (837) 453-2529',
    messages: [
      {
        id: '60ec5228a3c076d70a8fb7ec',
        fromRecipient: true,
        message:
          'Ipsum fugiat nostrud irure nulla ipsum minim aute reprehenderit et dolore eu commodo.',
      },
      {
        id: '60ec52281a9f7058a36d771d',
        fromRecipient: false,
        message: 'Irure dolore duis enim culpa.',
      },
      {
        id: '60ec52287f8c3d7e833e1c4e',
        fromRecipient: false,
        message: 'Excepteur nisi aliquip ex enim.',
      },
      {
        id: '60ec5228b4d7ff8a1794ecef',
        fromRecipient: false,
        message:
          'Nostrud occaecat voluptate aute nostrud deserunt proident esse et duis non enim in sit ad.',
      },
      {
        id: '60ec522836334a3b09155012',
        fromRecipient: false,
        message:
          'Veniam qui magna pariatur aliqua nostrud consequat do incididunt.',
      },
      {
        id: '60ec5228476387d6ccb24276',
        fromRecipient: true,
        message:
          'Excepteur id anim ad deserunt deserunt in aute cillum reprehenderit eu.',
      },
      {
        id: '60ec52282fe6144a4a0cc550',
        fromRecipient: true,
        message:
          'Occaecat consectetur ad est qui est est incididunt labore veniam.',
      },
      {
        id: '60ec52286adb7471224210ef',
        fromRecipient: true,
        message: 'Sunt ipsum culpa ut dolor aliquip velit.',
      },
      {
        id: '60ec522853c09ab6a09a6710',
        fromRecipient: false,
        message: 'Adipisicing qui consectetur aliqua esse exercitation non.',
      },
    ],
  },
  {
    id: '60ec5228c3137d192b9d8e6e',
    picture: 'http://placekitten.com/200/300',
    name: 'Nelson Graves',
    phone: '+1 (898) 474-3335',
    messages: [
      {
        id: '60ec522821526bbde57b3384',
        fromRecipient: true,
        message: 'Est aliqua Lorem dolor id.',
      },
      {
        id: '60ec5228139252e2094c8e2b',
        fromRecipient: false,
        message:
          'Nostrud eu exercitation velit sit ut amet ut esse in excepteur enim qui.',
      },
      {
        id: '60ec522833c69bf750853e20',
        fromRecipient: true,
        message: 'Cillum enim sint id est nostrud.',
      },
      {
        id: '60ec5228b34fc5d4031f2e0d',
        fromRecipient: false,
        message: 'Excepteur quis reprehenderit sit Lorem.',
      },
      {
        id: '60ec52281f00fec42e2dfad3',
        fromRecipient: true,
        message:
          'Labore pariatur ex occaecat dolore proident voluptate irure labore.',
      },
      {
        id: '60ec5228c7e051f9df5be12a',
        fromRecipient: true,
        message: 'Cillum ut deserunt et voluptate commodo occaecat.',
      },
      {
        id: '60ec5228169ced4f7c41ff97',
        fromRecipient: false,
        message:
          'Esse sunt magna duis cupidatat exercitation adipisicing amet non dolor culpa velit aliquip.',
      },
      {
        id: '60ec52282f9c0e8e42c220ac',
        fromRecipient: true,
        message:
          'Sint culpa irure amet esse ea commodo eu sit adipisicing anim culpa laborum.',
      },
      {
        id: '60ec52281b31f6a2e06bb371',
        fromRecipient: false,
        message: 'Nostrud ut irure pariatur non dolore.',
      },
    ],
  },
  {
    id: '60ec52284f284aa620ca90c9',
    picture: 'http://placekitten.com/200/300',
    name: 'Cleveland Dotson',
    phone: '+1 (908) 457-2527',
    messages: [
      {
        id: '60ec52288ed3d882ed798980',
        fromRecipient: false,
        message:
          'Reprehenderit excepteur commodo irure in aliquip reprehenderit qui et cillum aliquip sunt et.',
      },
      {
        id: '60ec52282bdd0a212e1a07aa',
        fromRecipient: true,
        message:
          'Et nulla in quis excepteur pariatur in consectetur officia pariatur nostrud ut enim cupidatat non.',
      },
      {
        id: '60ec5228403abc8aa24344f5',
        fromRecipient: true,
        message: 'Laboris anim Lorem voluptate reprehenderit labore aute.',
      },
      {
        id: '60ec5228000451fce51b0cdc',
        fromRecipient: true,
        message: 'Sit ad adipisicing ut esse eiusmod esse ex.',
      },
      {
        id: '60ec52288ec823bab74a96f1',
        fromRecipient: true,
        message: 'In mollit Lorem labore commodo ad reprehenderit Lorem.',
      },
      {
        id: '60ec5228a8262575f67864f5',
        fromRecipient: true,
        message: 'Proident nisi fugiat id nisi eu fugiat.',
      },
      {
        id: '60ec5228251027569910a56b',
        fromRecipient: false,
        message: 'Eu reprehenderit aute proident sit.',
      },
      {
        id: '60ec5228b5f116c68eb9c5b1',
        fromRecipient: false,
        message: 'Do elit dolor reprehenderit eu.',
      },
      {
        id: '60ec5228e6a544b672c610ac',
        fromRecipient: false,
        message: 'Tempor sunt consectetur proident ut ea enim proident irure.',
      },
      {
        id: '60ec5228ace1baa57ec480a7',
        fromRecipient: true,
        message:
          'Labore consectetur cillum reprehenderit nulla in do quis ad enim exercitation eiusmod.',
      },
      {
        id: '60ec52280c5d5c7a449a7578',
        fromRecipient: false,
        message:
          'Irure dolor voluptate eu proident Lorem mollit fugiat minim qui esse dolor exercitation aliqua aliqua.',
      },
      {
        id: '60ec522818b154c48ea32508',
        fromRecipient: true,
        message: 'Adipisicing cillum do minim et ex.',
      },
      {
        id: '60ec522833ce8bf125d9adec',
        fromRecipient: false,
        message: 'Tempor velit aliquip ut eu nostrud.',
      },
      {
        id: '60ec5228e9efbdcedc3ae173',
        fromRecipient: false,
        message: 'Veniam eu aliqua anim aliqua.',
      },
      {
        id: '60ec5228fd38ea53ad64fcd2',
        fromRecipient: true,
        message: 'Consequat aliquip aute magna velit veniam magna.',
      },
    ],
  },
  {
    id: '60ec5228c2b45b98c9b75262',
    picture: 'http://placekitten.com/200/300',
    name: 'Laurel Beach',
    phone: '+1 (884) 427-3529',
    messages: [
      {
        id: '60ec5228a077df47159070c3',
        fromRecipient: false,
        message:
          'Tempor ea voluptate aliqua voluptate commodo quis commodo nisi ullamco esse duis.',
      },
      {
        id: '60ec522884a03d884ac876d1',
        fromRecipient: true,
        message:
          'Amet aute exercitation do consectetur adipisicing laborum proident tempor.',
      },
      {
        id: '60ec522816a48290e76d073b',
        fromRecipient: true,
        message:
          'Aute cillum elit consectetur voluptate elit ipsum id culpa sunt.',
      },
      {
        id: '60ec5228f1dd94aa5ab3e02e',
        fromRecipient: false,
        message: 'Ullamco non amet culpa culpa eiusmod in.',
      },
      {
        id: '60ec5228a346842505f51961',
        fromRecipient: true,
        message:
          'Excepteur velit nulla deserunt ullamco ipsum ut minim dolore exercitation esse Lorem.',
      },
      {
        id: '60ec52284dbc17875194903e',
        fromRecipient: false,
        message:
          'In velit do consectetur ut aute minim mollit mollit aliquip incididunt commodo reprehenderit occaecat tempor.',
      },
      {
        id: '60ec52281e827e01bc002283',
        fromRecipient: false,
        message:
          'Fugiat aute anim aute aliqua proident incididunt nulla esse officia.',
      },
      {
        id: '60ec522860b13ce7bf8edebe',
        fromRecipient: true,
        message: 'Nostrud tempor ipsum amet aliqua ad mollit ipsum pariatur.',
      },
      {
        id: '60ec5228b57eb6b9dd618c99',
        fromRecipient: false,
        message:
          'Dolor adipisicing elit nulla voluptate anim tempor amet culpa.',
      },
      {
        id: '60ec5228307116bc5ec728ae',
        fromRecipient: true,
        message:
          'Amet eiusmod reprehenderit quis adipisicing cupidatat ullamco ex ad reprehenderit.',
      },
      {
        id: '60ec52280535d59db871780f',
        fromRecipient: false,
        message:
          'Lorem exercitation sint est do esse consectetur non sint laboris.',
      },
      {
        id: '60ec5228c59c2151ccb8f7e1',
        fromRecipient: false,
        message:
          'Amet ipsum quis adipisicing adipisicing voluptate labore cillum ad adipisicing culpa.',
      },
      {
        id: '60ec5228618f8c0de00579b0',
        fromRecipient: false,
        message:
          'Dolor sit excepteur pariatur dolore duis ex ad labore sint anim.',
      },
      {
        id: '60ec5228a8f509a9037b5010',
        fromRecipient: true,
        message:
          'Ipsum ea do ea aute consequat nostrud enim irure occaecat elit pariatur aliquip non.',
      },
      {
        id: '60ec52289ce714172ea779d0',
        fromRecipient: true,
        message:
          'Cillum consectetur in ex cillum ipsum tempor qui cupidatat tempor ut nulla.',
      },
    ],
  },
  {
    id: '60ec5228b8756af8c102e7b2',
    picture: 'http://placekitten.com/200/300',
    name: 'Guerrero Barton',
    phone: '+1 (891) 584-2553',
    messages: [
      {
        id: '60ec522852cb723d6fe57bf8',
        fromRecipient: true,
        message:
          'Eiusmod est consequat voluptate nisi voluptate voluptate dolore elit minim tempor Lorem magna nostrud.',
      },
      {
        id: '60ec52286b1a82fc25ec1356',
        fromRecipient: false,
        message:
          'Sit occaecat ea exercitation pariatur aliqua occaecat qui excepteur elit.',
      },
      {
        id: '60ec5228e59abab10eb3854a',
        fromRecipient: false,
        message:
          'Magna velit commodo Lorem officia proident sunt irure eiusmod ad.',
      },
      {
        id: '60ec5228a0d83030cbfa4d37',
        fromRecipient: true,
        message:
          'Consequat ullamco anim nulla mollit id incididunt id deserunt proident consectetur proident.',
      },
      {
        id: '60ec522884dff442bd629e8c',
        fromRecipient: true,
        message: 'Est aliqua in minim minim in.',
      },
      {
        id: '60ec52285ee7873e77f90853',
        fromRecipient: true,
        message: 'Non nisi excepteur magna adipisicing.',
      },
      {
        id: '60ec522832a29c8eee90238b',
        fromRecipient: false,
        message: 'Occaecat aute fugiat pariatur consectetur eiusmod.',
      },
      {
        id: '60ec522805aed8383162a0ab',
        fromRecipient: false,
        message:
          'Ex anim est voluptate proident id enim labore enim velit sint qui et laboris.',
      },
      {
        id: '60ec522899122d7bea6b3c6e',
        fromRecipient: false,
        message: 'Deserunt sunt commodo eu do eiusmod duis adipisicing.',
      },
      {
        id: '60ec5228a9dfa0252a970e2f',
        fromRecipient: true,
        message: 'Sunt est veniam irure qui anim nostrud incididunt ut veniam.',
      },
    ],
  },
  {
    id: '60ec5228ba8d6951d27abbb6',
    picture: 'http://placekitten.com/200/300',
    name: 'Phoebe Burris',
    phone: '+1 (874) 500-2458',
    messages: [
      {
        id: '60ec5228c77702f3d9ae8234',
        fromRecipient: false,
        message: 'Amet est labore laborum Lorem officia magna.',
      },
      {
        id: '60ec5228758235e3eb630bff',
        fromRecipient: true,
        message:
          'Do occaecat deserunt aliqua magna labore id dolore commodo consectetur.',
      },
      {
        id: '60ec52282ffea023563edb51',
        fromRecipient: false,
        message: 'Do exercitation proident occaecat consequat magna ad.',
      },
      {
        id: '60ec5228f9d18ad028500771',
        fromRecipient: false,
        message: 'Irure culpa velit reprehenderit pariatur.',
      },
      {
        id: '60ec5228f12000f78fa5116f',
        fromRecipient: false,
        message: 'Duis enim pariatur cillum est.',
      },
      {
        id: '60ec52281942c5718853fc7b',
        fromRecipient: false,
        message: 'Nostrud esse eu deserunt velit magna sint magna ut.',
      },
      {
        id: '60ec5228e5c29344adebd5ed',
        fromRecipient: false,
        message:
          'Velit laboris deserunt eu tempor excepteur qui incididunt adipisicing ex est tempor est.',
      },
      {
        id: '60ec5228c4c4d1bcc9ed90e2',
        fromRecipient: true,
        message:
          'Sunt quis irure ad occaecat adipisicing officia nostrud minim eu do Lorem veniam ullamco veniam.',
      },
    ],
  },
  {
    id: '60ec5228217051dcd3de63dc',
    picture: 'http://placekitten.com/200/300',
    name: 'Lauren Riggs',
    phone: '+1 (811) 433-2086',
    messages: [
      {
        id: '60ec5228f9c5b32ab054c453',
        fromRecipient: false,
        message: 'Veniam aliquip proident minim aliqua mollit.',
      },
      {
        id: '60ec5228342fee4da29bf669',
        fromRecipient: true,
        message:
          'Quis sint aliquip fugiat labore eu velit ut dolor incididunt.',
      },
      {
        id: '60ec52289eb637d0718fad48',
        fromRecipient: false,
        message:
          'Aliqua nulla laboris dolore mollit dolore do do reprehenderit aliqua laborum occaecat aliquip aliquip.',
      },
      {
        id: '60ec5228ab1a6558df72bfd7',
        fromRecipient: false,
        message:
          'Reprehenderit sit nulla laboris sit aute sit tempor nostrud nisi minim ex laboris laboris.',
      },
      {
        id: '60ec52282846370ab3014873',
        fromRecipient: false,
        message:
          'Sint esse commodo proident duis ea dolore est non minim occaecat velit dolor sit ipsum.',
      },
      {
        id: '60ec52286f5cbb128f3b9946',
        fromRecipient: false,
        message:
          'Laboris irure consectetur exercitation esse laboris aliqua sunt culpa eu est dolor proident.',
      },
      {
        id: '60ec5228b26d4b44af034343',
        fromRecipient: true,
        message: 'Nisi do occaecat amet nulla in voluptate reprehenderit.',
      },
      {
        id: '60ec52280c9ed41d29484ff7',
        fromRecipient: false,
        message: 'Aute sunt ea reprehenderit exercitation aliqua.',
      },
      {
        id: '60ec522889729b953edbce18',
        fromRecipient: false,
        message:
          'In do cillum in incididunt amet cillum qui qui culpa occaecat ex pariatur laboris sint.',
      },
      {
        id: '60ec52287eaca55129d0546b',
        fromRecipient: true,
        message:
          'Qui tempor excepteur non reprehenderit mollit sit exercitation proident in consequat.',
      },
      {
        id: '60ec5228ef93b69bd353e818',
        fromRecipient: false,
        message:
          'Eiusmod voluptate proident cupidatat ipsum in velit nostrud incididunt reprehenderit fugiat.',
      },
      {
        id: '60ec52285f81a39b3117ec22',
        fromRecipient: false,
        message:
          'Voluptate eiusmod eiusmod laboris mollit enim ea laboris nisi cillum nulla mollit.',
      },
      {
        id: '60ec5228990a349aeb6b3ae4',
        fromRecipient: false,
        message:
          'Nulla nulla consectetur culpa ea dolore amet duis exercitation magna labore magna adipisicing.',
      },
      {
        id: '60ec52286c5b625aac7b7c17',
        fromRecipient: false,
        message: 'Consectetur tempor mollit laborum occaecat.',
      },
      {
        id: '60ec5228b14eb745620c6f3d',
        fromRecipient: false,
        message:
          'Consequat aliqua culpa adipisicing consectetur non dolore reprehenderit qui ullamco.',
      },
    ],
  },
  {
    id: '60ec5228d551cf415923322c',
    picture: 'http://placekitten.com/200/300',
    name: 'Mary Stone',
    phone: '+1 (836) 571-2546',
    messages: [
      {
        id: '60ec5228966f68bb779f2091',
        fromRecipient: false,
        message:
          'Deserunt cupidatat esse tempor ipsum ut est exercitation ex nostrud consequat proident.',
      },
      {
        id: '60ec52285d328c402444cb57',
        fromRecipient: true,
        message:
          'Irure magna laborum fugiat ut voluptate nulla minim laboris adipisicing tempor voluptate eiusmod amet.',
      },
      {
        id: '60ec5228f3d4c30af1124069',
        fromRecipient: false,
        message: 'Cillum mollit mollit voluptate culpa velit nulla esse.',
      },
      {
        id: '60ec5228cf3c2e386db8a5c4',
        fromRecipient: true,
        message: 'Occaecat duis esse culpa est et adipisicing tempor.',
      },
      {
        id: '60ec522849dcffa47724b312',
        fromRecipient: true,
        message:
          'Et nisi pariatur labore mollit aute consectetur non sit sit Lorem aliqua.',
      },
      {
        id: '60ec52281f7b11a964dcd943',
        fromRecipient: true,
        message: 'Ad aute ullamco excepteur dolore voluptate tempor excepteur.',
      },
      {
        id: '60ec5228c83ff3276e2cb872',
        fromRecipient: true,
        message:
          'Ut nostrud incididunt incididunt tempor deserunt et non dolore ullamco commodo incididunt eu ex.',
      },
      {
        id: '60ec5228439f7986b3adf2c8',
        fromRecipient: false,
        message:
          'Non est deserunt consectetur culpa laborum voluptate et consectetur irure anim.',
      },
    ],
  },
  {
    id: '60ec5228b7e9b59630b27328',
    picture: 'http://placekitten.com/200/300',
    name: 'Ramos Delaney',
    phone: '+1 (899) 509-3619',
    messages: [
      {
        id: '60ec5228d1d4dbf0e31d45a4',
        fromRecipient: false,
        message:
          'Consequat ex occaecat ex ipsum velit dolore mollit dolore adipisicing.',
      },
      {
        id: '60ec5228a6c1ed534c8a77da',
        fromRecipient: false,
        message: 'Lorem culpa veniam esse consectetur.',
      },
      {
        id: '60ec52282eda66d4b09c13a6',
        fromRecipient: false,
        message: 'Anim Lorem est nulla irure in elit.',
      },
      {
        id: '60ec52283ef021bb095a20b0',
        fromRecipient: false,
        message:
          'Deserunt culpa dolore ullamco ea pariatur duis tempor dolore do.',
      },
      {
        id: '60ec52286b0c1e96dd72e9c7',
        fromRecipient: false,
        message: 'Anim laboris Lorem eu eu sunt anim mollit sunt.',
      },
      {
        id: '60ec522818467377756453c8',
        fromRecipient: true,
        message:
          'Nisi dolor officia non incididunt ut aute excepteur est sit sit.',
      },
      {
        id: '60ec5228f3c1ce99cfb7b523',
        fromRecipient: true,
        message:
          'Eiusmod anim sunt quis officia voluptate nulla ea qui reprehenderit deserunt duis.',
      },
      {
        id: '60ec52280b56911f89d70a31',
        fromRecipient: true,
        message:
          'Nisi ea veniam Lorem aliqua elit amet excepteur labore exercitation.',
      },
    ],
  },
  {
    id: '60ec5228a72b26e42cf38786',
    picture: 'http://placekitten.com/200/300',
    name: 'Parks Burt',
    phone: '+1 (830) 430-3095',
    messages: [
      {
        id: '60ec5228b4f4e27782eef94d',
        fromRecipient: true,
        message: 'Aliqua nulla commodo laborum sunt.',
      },
      {
        id: '60ec5228de93b173a5de62b0',
        fromRecipient: false,
        message: 'Fugiat et magna veniam eu consequat.',
      },
      {
        id: '60ec522852c463edb2f38bd2',
        fromRecipient: true,
        message:
          'Ex pariatur excepteur ad magna veniam Lorem adipisicing elit cillum.',
      },
      {
        id: '60ec5228d323a1157af3661a',
        fromRecipient: true,
        message: 'Consequat exercitation aliquip sunt ullamco.',
      },
      {
        id: '60ec5228464ca4930b8e2a3c',
        fromRecipient: false,
        message:
          'Labore id occaecat consequat in non laborum veniam est ex mollit laboris velit.',
      },
      {
        id: '60ec5228ffc1765e5bc7e6d2',
        fromRecipient: true,
        message: 'Duis nostrud cupidatat adipisicing do.',
      },
    ],
  },
  {
    id: '60ec522859d906939070eaf0',
    picture: 'http://placekitten.com/200/300',
    name: 'Austin Hansen',
    phone: '+1 (908) 598-3355',
    messages: [
      {
        id: '60ec52282c1d6c79d08e78cf',
        fromRecipient: false,
        message:
          'In eiusmod incididunt amet ex proident Lorem et elit consequat fugiat sint.',
      },
      {
        id: '60ec5228673d65c4702edc97',
        fromRecipient: false,
        message:
          'Incididunt incididunt Lorem et incididunt fugiat adipisicing labore eiusmod eu mollit adipisicing reprehenderit elit.',
      },
      {
        id: '60ec5228b9dd8364d1dc0f22',
        fromRecipient: false,
        message:
          'Laboris eu ea amet velit est laboris cillum Lorem laborum non ad duis cupidatat aliqua.',
      },
      {
        id: '60ec5228cc84914798ad1151',
        fromRecipient: true,
        message: 'Elit cupidatat exercitation commodo qui duis consectetur.',
      },
      {
        id: '60ec5228aade4f1a8b610ac8',
        fromRecipient: false,
        message:
          'Non ipsum id Lorem consequat elit dolore Lorem irure magna officia Lorem.',
      },
    ],
  },
  {
    id: '60ec52281a3142b846b2d501',
    picture: 'http://placekitten.com/200/300',
    name: 'Mccray Skinner',
    phone: '+1 (912) 584-2850',
    messages: [
      {
        id: '60ec5228d1869cbecee10fa1',
        fromRecipient: true,
        message: 'Aute enim nulla sunt excepteur mollit dolore sint.',
      },
      {
        id: '60ec5228370b7cba5d2d8d1d',
        fromRecipient: true,
        message:
          'Tempor qui id labore labore culpa incididunt ipsum anim minim.',
      },
      {
        id: '60ec5228cce9b755c3994f19',
        fromRecipient: false,
        message: 'Eu id adipisicing amet deserunt eiusmod ea proident.',
      },
      {
        id: '60ec52289235e9b53c4956bb',
        fromRecipient: true,
        message:
          'Aliqua aute ea adipisicing occaecat qui labore aliqua deserunt magna.',
      },
      {
        id: '60ec5228158ede20ae66a9a5',
        fromRecipient: true,
        message: 'Amet culpa qui tempor elit occaecat dolore veniam aliqua.',
      },
      {
        id: '60ec5228bcf8dfa23c462abb',
        fromRecipient: true,
        message:
          'Voluptate aliqua laborum exercitation nulla esse cupidatat occaecat mollit.',
      },
      {
        id: '60ec522802f6ca691a21dec6',
        fromRecipient: false,
        message:
          'Deserunt enim aliqua amet laboris enim fugiat ex est in in et tempor elit sit.',
      },
      {
        id: '60ec522882eba69986d0833a',
        fromRecipient: true,
        message:
          'Excepteur nisi anim occaecat deserunt do in sit anim aliquip amet sint cupidatat.',
      },
      {
        id: '60ec522883c817f8f9c0ba3b',
        fromRecipient: false,
        message: 'Id aliqua ad ad deserunt esse ex mollit enim eiusmod.',
      },
      {
        id: '60ec5228776252f0a2d0c477',
        fromRecipient: true,
        message:
          'Sint ullamco proident commodo eu eiusmod labore exercitation sit id elit.',
      },
      {
        id: '60ec52288847834590e68c6b',
        fromRecipient: true,
        message: 'Qui nulla commodo labore velit occaecat veniam.',
      },
      {
        id: '60ec5228af17401428547459',
        fromRecipient: true,
        message:
          'Nisi veniam consectetur commodo et aute exercitation nostrud excepteur aute consequat non.',
      },
    ],
  },
  {
    id: '60ec522829d517cfbe015fdc',
    picture: 'http://placekitten.com/200/300',
    name: 'Witt Bolton',
    phone: '+1 (827) 408-3879',
    messages: [
      {
        id: '60ec52284abca617e107db4e',
        fromRecipient: false,
        message:
          'Veniam sunt non elit aliqua sint fugiat proident amet quis mollit fugiat irure elit.',
      },
      {
        id: '60ec5228946218b17231fdf0',
        fromRecipient: true,
        message:
          'Consequat ut irure exercitation incididunt sint commodo tempor reprehenderit aliquip velit qui incididunt.',
      },
      {
        id: '60ec52280f93e5891e522138',
        fromRecipient: true,
        message: 'Occaecat duis exercitation magna ad Lorem.',
      },
      {
        id: '60ec52287883fe2e6f59d1b0',
        fromRecipient: false,
        message: 'Excepteur qui amet ea culpa qui.',
      },
      {
        id: '60ec52288a1ab5d267d9ab25',
        fromRecipient: false,
        message: 'In tempor consequat ad fugiat.',
      },
      {
        id: '60ec52286ee8448e440815eb',
        fromRecipient: true,
        message:
          'Quis anim anim reprehenderit qui proident proident dolor incididunt nisi aliquip sint aliqua adipisicing.',
      },
      {
        id: '60ec5228a3917a834ec5991f',
        fromRecipient: true,
        message:
          'Do eiusmod fugiat sint cupidatat fugiat mollit nostrud ut voluptate.',
      },
      {
        id: '60ec522801290b832e504651',
        fromRecipient: false,
        message: 'Qui laborum ullamco magna eu officia qui cillum.',
      },
      {
        id: '60ec5228d77c2ca10301149c',
        fromRecipient: true,
        message: 'Sit sint cupidatat reprehenderit aute do deserunt.',
      },
      {
        id: '60ec52287c0d824df542b1a5',
        fromRecipient: true,
        message:
          'Dolor ad ullamco labore adipisicing ex esse nostrud velit non consequat.',
      },
      {
        id: '60ec5228afdaaf9777163e44',
        fromRecipient: true,
        message:
          'Deserunt eiusmod culpa ut laboris nulla minim dolore ut ipsum.',
      },
      {
        id: '60ec52288980395f47ed917c',
        fromRecipient: false,
        message:
          'Voluptate in ipsum eu pariatur qui et voluptate voluptate irure duis pariatur ipsum.',
      },
      {
        id: '60ec5228e1723f7ef22279cb',
        fromRecipient: true,
        message: 'Esse do aute duis dolore deserunt aliquip enim.',
      },
    ],
  },
  {
    id: '60ec52282812779f34bf891e',
    picture: 'http://placekitten.com/200/300',
    name: 'Wagner Tran',
    phone: '+1 (974) 571-2687',
    messages: [
      {
        id: '60ec52283acbd73c0eb56cc0',
        fromRecipient: false,
        message:
          'Voluptate cupidatat eiusmod tempor nisi dolore ea voluptate esse aliquip cillum do.',
      },
      {
        id: '60ec5228c32f2bd681b61138',
        fromRecipient: false,
        message:
          'Tempor incididunt minim irure velit cillum adipisicing nostrud tempor.',
      },
      {
        id: '60ec522893f53f4c04e1078d',
        fromRecipient: true,
        message: 'Amet commodo voluptate esse irure do irure irure ex.',
      },
      {
        id: '60ec5228b6e056f65035cda3',
        fromRecipient: false,
        message: 'Non nostrud velit commodo occaecat.',
      },
      {
        id: '60ec5228d168de568bdada84',
        fromRecipient: true,
        message:
          'Non ipsum exercitation sint deserunt deserunt reprehenderit ex deserunt.',
      },
      {
        id: '60ec522845b9ec57cb298017',
        fromRecipient: true,
        message: 'Sunt ea non ad sit aute ullamco amet non consequat magna.',
      },
      {
        id: '60ec5228349e9de0cd116ab0',
        fromRecipient: false,
        message: 'Laborum labore in quis irure.',
      },
      {
        id: '60ec5228b500fc89db273745',
        fromRecipient: false,
        message:
          'Do excepteur eiusmod deserunt dolore reprehenderit irure aliqua laborum incididunt adipisicing elit reprehenderit eiusmod ullamco.',
      },
      {
        id: '60ec5228ecf03aa7310aaad0',
        fromRecipient: true,
        message:
          'Velit in reprehenderit deserunt officia qui nostrud nulla in id culpa.',
      },
      {
        id: '60ec5228e46fe91653053a83',
        fromRecipient: false,
        message:
          'Occaecat dolore aliqua tempor aliqua quis sit pariatur eiusmod commodo anim ea.',
      },
      {
        id: '60ec522825f23fe99d20f8c4',
        fromRecipient: true,
        message:
          'Dolore amet aliqua elit et aliqua adipisicing enim cupidatat est eiusmod.',
      },
      {
        id: '60ec52284c797a628d391713',
        fromRecipient: false,
        message:
          'Sunt tempor labore eiusmod fugiat id quis labore Lorem esse non ut deserunt labore minim.',
      },
      {
        id: '60ec522846bd8126c995fdc6',
        fromRecipient: true,
        message: 'Fugiat in fugiat nostrud quis tempor incididunt cupidatat.',
      },
      {
        id: '60ec522844359a54bf003b8d',
        fromRecipient: true,
        message: 'Voluptate anim proident do eu exercitation nisi.',
      },
    ],
  },
  {
    id: '60ec52283149ef88e56cade9',
    picture: 'http://placekitten.com/200/300',
    name: 'Alta Huffman',
    phone: '+1 (836) 521-2257',
    messages: [
      {
        id: '60ec52288fcd49380311cbae',
        fromRecipient: false,
        message:
          'Consectetur proident exercitation quis mollit elit aliqua eu minim magna cillum.',
      },
      {
        id: '60ec5228b1016c848ddcdc41',
        fromRecipient: true,
        message: 'Aliquip esse voluptate dolore ullamco qui in.',
      },
      {
        id: '60ec5228747bf3380b85a2ea',
        fromRecipient: true,
        message: 'Voluptate cupidatat ea duis occaecat.',
      },
      {
        id: '60ec522824ba8dec7e686349',
        fromRecipient: true,
        message: 'Laboris aute magna laborum mollit.',
      },
      {
        id: '60ec52286e87f12e85f34c99',
        fromRecipient: false,
        message:
          'Eu voluptate occaecat magna ea velit commodo aliqua minim ut ea ex qui sunt.',
      },
      {
        id: '60ec5228f959d476fda86cae',
        fromRecipient: true,
        message:
          'Reprehenderit ad aute sint ad eiusmod veniam aliquip nostrud.',
      },
      {
        id: '60ec5228556cb6019ffdbfb0',
        fromRecipient: true,
        message: 'Magna commodo Lorem non culpa labore incididunt esse sunt.',
      },
      {
        id: '60ec5228774eaba62f5e51d4',
        fromRecipient: true,
        message:
          'Cupidatat aute amet dolore ea velit eu sit ea aliquip tempor.',
      },
      {
        id: '60ec522834afd2e71c0c113c',
        fromRecipient: false,
        message:
          'Cupidatat quis Lorem quis officia dolore Lorem aliquip enim sit fugiat culpa nostrud cupidatat fugiat.',
      },
      {
        id: '60ec522837604c86593e0fae',
        fromRecipient: true,
        message: 'Adipisicing in mollit minim qui laborum.',
      },
      {
        id: '60ec522874b4d348e90824ea',
        fromRecipient: false,
        message: 'Sunt pariatur officia sit anim.',
      },
      {
        id: '60ec5228238581566e6756fd',
        fromRecipient: false,
        message:
          'Proident irure ipsum et nostrud quis cillum ad sint tempor labore velit aliqua mollit officia.',
      },
      {
        id: '60ec5228fb2201ff010335a1',
        fromRecipient: true,
        message:
          'Nulla pariatur est mollit do sit sunt non amet aliqua ea velit ullamco tempor ad.',
      },
      {
        id: '60ec5228defa3abc9f66ac43',
        fromRecipient: true,
        message:
          'Commodo excepteur id consequat mollit amet exercitation irure ex nostrud.',
      },
      {
        id: '60ec5228e0cf69bf51a6a7a6',
        fromRecipient: true,
        message: 'Nisi quis aute non officia quis.',
      },
    ],
  },
  {
    id: '60ec5228aeb8ae0eff96f1d9',
    picture: 'http://placekitten.com/200/300',
    name: 'Cunningham Palmer',
    phone: '+1 (866) 465-3853',
    messages: [
      {
        id: '60ec52289770b0e61fbdf56d',
        fromRecipient: true,
        message: 'Irure Lorem velit velit eiusmod Lorem.',
      },
      {
        id: '60ec52288a10354e2ba53e7a',
        fromRecipient: true,
        message: 'Elit eu excepteur aute excepteur officia eu ea.',
      },
      {
        id: '60ec52282db617b5fff72be0',
        fromRecipient: false,
        message: 'Velit id cupidatat sunt veniam ut pariatur.',
      },
      {
        id: '60ec522859bfb65af5cdcd16',
        fromRecipient: false,
        message:
          'Amet quis dolor proident veniam anim Lorem consequat deserunt.',
      },
      {
        id: '60ec52285e8a7262b0155535',
        fromRecipient: false,
        message:
          'Quis consectetur est consequat elit cillum officia consectetur elit.',
      },
    ],
  },
  {
    id: '60ec52281f23f87282ee498a',
    picture: 'http://placekitten.com/200/300',
    name: 'Mclaughlin Freeman',
    phone: '+1 (806) 596-2459',
    messages: [
      {
        id: '60ec5228c5cee4c7ac9b4da6',
        fromRecipient: false,
        message:
          'Velit sunt sint ullamco reprehenderit occaecat aliqua est occaecat dolor eiusmod mollit.',
      },
      {
        id: '60ec5228f71dae2b5b45087e',
        fromRecipient: false,
        message: 'Enim culpa eu cillum sint nisi et incididunt.',
      },
      {
        id: '60ec52284dd9f11017283fd5',
        fromRecipient: false,
        message:
          'Laboris velit eu nisi ex excepteur cupidatat veniam sit occaecat occaecat enim nulla.',
      },
      {
        id: '60ec52286329a7b811192892',
        fromRecipient: true,
        message:
          'In ullamco duis nostrud amet adipisicing labore minim esse tempor amet amet.',
      },
      {
        id: '60ec5228527eec71f35bdef4',
        fromRecipient: true,
        message:
          'In id sint deserunt velit amet irure sint adipisicing proident.',
      },
      {
        id: '60ec52280b1a4a0533a9e8de',
        fromRecipient: false,
        message:
          'Ex sunt irure fugiat commodo voluptate ipsum elit culpa est sint exercitation incididunt fugiat.',
      },
      {
        id: '60ec5228189a1a5f9a3bb1b8',
        fromRecipient: true,
        message:
          'Irure officia irure nulla non quis quis et aliqua elit nisi adipisicing enim mollit.',
      },
      {
        id: '60ec52289fb1e82fbb902bce',
        fromRecipient: true,
        message:
          'Occaecat sint excepteur exercitation consequat consectetur excepteur anim duis consequat Lorem ea.',
      },
      {
        id: '60ec522845d7efaf571310d7',
        fromRecipient: true,
        message: 'Nulla amet est consequat nulla eu tempor nisi.',
      },
      {
        id: '60ec5228e9e43f661819870d',
        fromRecipient: false,
        message:
          'Reprehenderit exercitation irure do veniam commodo esse velit do laboris amet aliqua aute.',
      },
      {
        id: '60ec52288d792255c2a7361d',
        fromRecipient: true,
        message:
          'Voluptate sit commodo amet ea aute ex voluptate sit exercitation nulla officia ex.',
      },
      {
        id: '60ec52283c1d27c3b2e3af06',
        fromRecipient: false,
        message:
          'Laborum non ex voluptate id est in culpa reprehenderit esse cupidatat qui aute est.',
      },
      {
        id: '60ec52289fd3fb177c7d6f8e',
        fromRecipient: true,
        message:
          'Incididunt dolore qui adipisicing esse deserunt qui tempor proident ipsum.',
      },
      {
        id: '60ec52289703148e7c833838',
        fromRecipient: true,
        message: 'Sit nisi reprehenderit voluptate deserunt velit tempor.',
      },
      {
        id: '60ec522817c0fc624892ce13',
        fromRecipient: true,
        message:
          'Cupidatat nulla consequat cillum qui sint pariatur id sit mollit culpa.',
      },
    ],
  },
];
