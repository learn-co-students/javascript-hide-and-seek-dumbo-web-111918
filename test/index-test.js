describe('index', () => {
  describe('getFirstSelector(selector)', () => {
    it('returns the first element that matches the selector', () => {
      expect(getFirstSelector('div').id).to.equal('nested')
      expect(getFirstSelector('.ranked-list')).to.equal(document.querySelector('.ranked-list'))
    })
  })

  describe('nestedTarget()', () => {
    it('pulls a .target out of #nested', () => {
      expect(nestedTarget()).to.equal(document.querySelector('#nested .target'))
    })
  })

  describe('deepestChild()', () => {
    it('returns the most deeply nested child in #grand-node', () => {
      console.log(deepestChild().innerHTML)
      expect(deepestChild()).to.equal(document.querySelector('#grand-node div div div div'))
    })
  })

})
