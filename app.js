// 0. How many usrs are Active

[
    {
        $match: {isActive:true}
    },
    {
        $count: "$isActive"
    }
]



//1. Avgrage age of the all users
[
    {
    $group: {
      _id: {},
      avgrageAge:{$avg: "$age"}
      }
  }
  ]

// 2.list the 2 most commnon fruits among the users

[
    {
    $group: {
      _id:"$favoriteFruit",
      countUser:{ $sum:1}
      }
  },
    {
      $sort: {
        countUser: -1
      }
    },
    {
      $limit: 4
    }
  ]
  

  [
    {
      $group: {
        _id: "$company.location.country",
        UserCount:
          {
            $sum:1
          }
      }
    },
    {
      $sort: {
        UserCount: -1
      }
    },
    {
      $limit: 2
    }
  ]


  // 4.which contry has highest active number of users


  [
    {$match: {
      isActive:true
    }}
    ,
    {
      $group: {
        _id: "$company.location.country",
        UserCount:
          {
            $sum:1
          }
      }
    },
    {
      $sort: {
        UserCount: -1
      }
    },
    {
      $limit: 1
    }
  ]

  //



  // 6.0 What are name & age of user who are inactive & have velit as tag

  [{
    $match: {
      tags:"velit"
      ,isActive:false
    }
  },
   {
     $project: {
       name:1,
       age:1,
       _id:0,// optional
     }
   }]


//    7.0 who has registed  more recently

[
    {
      $sort: {
        registered: -1
      }
    },
    {
      $limit: 5
    },
    {
      $project: {
        registered:1,
        age:1,
        name:1,
        "company.phone":1
      }
    }
  ]

  // 8.0 Catogories the user by there fav

  [
    {
      $group: {
        _id: "$favoriteFruit",
        user:{$push:"$name"}
      }
    }
  ]

  // 9.0 How  many user have 'ads' as second tags in tag array
  [
    {
      $match: {
      "tags.1":"ad",
      }
    },
    {
      $count: 'NoOfUsers'
    }
  ]

  // 10.Give all user having 'ad' and 'enim' both as tag
  [
    {
      $match: {
      tags: {$all:["ad","enim"]}  
      }
    }
  ]

  // 11.0  List all companies located in USA with their corresponding user count 
  [
    { $match: {
      "company.location.country":"USA"
    }
    },
    {
      $group: {
        _id: "$company.title",
         Usercount:{$sum:1}
      }
    }
  ]

  // 12.0


  // 13.0


  // 14.0
