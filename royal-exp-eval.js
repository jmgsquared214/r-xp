/* Big O time complexity: the algorithm has a polynomial time complexity -- specifically O(n^2) -- because it requires 2 levels of looping over an input (nested loops). */

const DATA = [
  {
    paytype_id: 4,
    amount: 141.85,
    date: '2017-11-04',
    service_category: 2
  },
  {
    paytype_id: 5,
    amount: 769.3,
    date: '2017-11-04',
    service_category: 1
  },
  {
    paytype_id: 3,
    amount: 15286.9,
    date: '2017-11-06',
    service_category: 1
  },
  {
    paytype_id: 3,
    amount: 844.1,
    date: '2017-11-06',
    service_category: 1
  },
  {
    paytype_id: 3,
    amount: 3262.9,
    date: '2017-11-06',
    service_category: 2
  },
  {
    paytype_id: 12,
    amount: 0,
    date: '2017-11-06',
    service_category: 1
  },
  {
    paytype_id: 4,
    amount: 0,
    date: '2017-11-07',
    service_category: 1
  }
];

function aggregateData(data) {
  data.sort((a, b) => a.paytype_id - b.paytype_id);

  for (let i = 0; i < data.length; i++) {
    const curVal = data[i];
    delete curVal.service_category;

    // loop curVal over data to compare
    for (let j = 0; j < data.length; j++) {
      const compVal = data[j];
      delete compVal.service_category;

      // verify index not the same
      if (i !== j) {
        // if BOTH id and date match: add amounts together && remove comp object
        if (
          curVal.paytype_id === compVal.paytype_id &&
          curVal.date === compVal.date
        ) {
          curVal.amount = curVal.amount + compVal.amount;
          data.splice(j, 1);
        }
      }
    }
  }
  console.log(data);
}

aggregateData(DATA);
