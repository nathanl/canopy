JSCLASS_PATH = 'vendor/js.class/build/min'
load(JSCLASS_PATH + '/loader.js')

JS.Packages(function() { with(this) {
    file('build/stake.js').provides('Stake')
    autoload(/^(.*)Spec$/, {from: 'spec', require: '$1'})
}})

require('JS.Test', 'Stake', function() {
    require('Stake.CharClassParserSpec',
            'Stake.ChoiceParserSpec',
            'Stake.GrammarParserSpec',
            'Stake.LabelParserSpec',
            'Stake.MaybeParserSpec',
            'Stake.NotParserSpec',
            'Stake.RepeatParserSpec',
            'Stake.SequenceParserSpec',
            'Stake.StringParserSpec',
            
    JS.Test.method('autorun'))
})

