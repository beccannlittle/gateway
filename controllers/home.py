"""
This controlls the home view.

handles two seperate views to members and non members
"""
from django.contrib.auth import logout, authenticate, login
from django.shortcuts import render


def home_view(request):
    """seperate members and non members."""
    if request.user.is_authenticated():
        ventures = [
            {
                "title": "Murphee's Irish Coats",
                "image": "coat",
                "progress": "90",
                "step": "elevator",
                "hook": "Bringing the comfort and quality of Traditional Irish\
                        coats to an Online International Exchange",
                "description": "Coming Soon!",
                "id": "0"
            },
            {
                "title": "Three Lions Magic Show",
                "image": "anti-gravity",
                "progress": "60",
                "step": "survey",
                "hook": "A crew of three globally acclaimed Magicians bend the\
                        rules of reality to make the mundane extraordinary",
                "description": "Comming Soon!",
                "id": "1"
            },
            {
                "title": "Melies Studio",
                "image": "film",
                "progress": "70",
                "step": "interest",
                "hook": "Georges Melies makes Black and White cinematography \
                         relevant in the 21th century",
                "description": "Coming Soon!",
                "id": "2"
            },
            {
                "title": "Columbian Exchange",
                "image": "barge",
                "progress": "20",
                "step": "aha",
                "hook": "The quick and enjoyable way to cross the Columbia \
                        River Gorge",
                "description": "Coming Soon!",
                "id": "3"
            },
            {
                "title": "Boston Express",
                "image": "boat",
                "progress": "30",
                "step": "gap",
                "hook": "Want to captain your own ship through Boston Harbor \
                        try Boston express rent a boat!",
                "description": "Coming Soon!",
                "id": "4"
            },
            {
                "title": "Bricks to Buildings",
                "image": "bricks",
                "progress": "50",
                "step": "survey",
                "hook": "We take ruble from demolitions and make low cost \
                         housing",
                "description": "Coming Soon!",
                "id": "5"
            },
            {
                "title": "Sands of Time",
                "image": "sand",
                "progress": "90",
                "step": "end",
                "hook": "Sand is ever flowing and timeless",
                "description": "Coming Soon!",
                "id": "6"
            },
            {
                "title": "Turtle Bay",
                "image": "sunglasses",
                "progress": "30",
                "step": "aha",
                "hook": "Sunglasses that can be worn in the sea",
                "description": "Coming Soon!",
                "id": "7"
            },
            {
                "title": "Hawaiian Reef Tours",
                "image": "turtle",
                "progress": "50",
                "step": "survey",
                "hook": "We have scouted the best reefs on Hawaii \
                        and want to give you the experiance of a lifetime",
                "description": "Coming Soon!",
                "id": "8"
            }
        ]

        return render(
            request,
            'members.html',
            dict(
                ventures=ventures[1:],
                currentVenture=ventures[0]
            )
        )
    else:
        return render(request, 'home.html')
