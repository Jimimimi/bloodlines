function Person (data) {
    this.name = data.name;
    this.surname = data.surname,
    this.desc = data.desc,
    this.fullname = function(){
        return this.name + ' ' + this.surname;
    },
    this.influence = {
        political : 0,
        economical: 0,
        social:0
    }
}

function Family (data) {
    this.name = data.name;
    this.desc = data.desc;
    this.members = [],
    this.currentHead = '',
    this.addMember = function(person){
        this.members.push(person);
    };
    this.influence = function(t){
        var inf = 0;
        this.members.forEach(function(m){
            inf += m.influence[t];
        });
        return inf;
    }
}
