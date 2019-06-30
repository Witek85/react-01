import React, { Component } from 'react';

class Reduce extends Component {
    constructor() {
        super();
        this.state = {
        };
    }

    addAllItems = (akumulator, item) => {
        console.log(akumulator, item)
        return akumulator + item;
    }

    countVotes = (sum, vote) => {
        console.log(sum, vote)
        if (!sum[vote]) {
            sum[vote] = 1;
        } else {
            sum[vote] += 1;
        }
        return sum;
    }

    render() {
        const arr1 = [1,2,3,4,5,6,7,8,9];
        const votes = ['angular', 'react', 'vue', 'angular', 'react', 'vue', 'react', 'vue','vanilla'];

        const total = arr1.reduce(this.addAllItems, 0);
        const totalVotes = votes.reduce(this.countVotes, {});

        console.log(totalVotes);

        return (
            <div>
              reduce {total}
            </div>
        );
    }    
}

export default Reduce;