var univs = {

    university: {

        "birzeit": {

            address: "Ramallah",

            collage: [

                {
                    id: 1, name: "CS", Special: [

                        { id: 1, name: "Computer Science" },

                        { id: 2, name: "Security" }

                    ]
                },



                {
                    id: 2, name: "law", Special: [

                        { id: 1, name: "law 1" },

                        { id: 2, name: "law 2" }

                    ]
                }

            ]

        }





    },



    getUniversity: function (name) {

        return this.university[name]

    },

    getAllUniversity: function () {

        return this.university;

    },



    getAllCollage: function (name) {

        return this.getUniversity(name).collage;

    },



    getCollage: function (uName, cName) {

        return this.getUniversity(uName).collage.find(function (collage) {

            return collage.name == cName;

        });

    },

    getAllSpecials: function (uName, cName) {

        return this.getCollage(uName, cName).Special;

    },

}
