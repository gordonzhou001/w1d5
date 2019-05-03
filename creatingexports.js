module.exports = {
    
    list: [],

    takesanumber: function(input){
        this.list.push(input)
        return this.list
    },
    
    sortnumber: function(){
        this.list.sort(function(a, b){
            return a - b
        })
        return this.list
    }
}