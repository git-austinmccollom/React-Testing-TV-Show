import React from "react";
import { fireEvent, render, screen, waitFor, act } from "@testing-library/react";
import { fetchShow as mockFetchShow } from "../api/fetchShow";
import Episodes from "./Episodes";
import userEvent from "@testing-library/user-event";

jest.mock("../api/fetchShow");
// console.log(mockFetchShow);

const data = {
    id: 2993,
    url: "http://www.tvmaze.com/shows/2993/stranger-things",
    name: "Stranger Things",
    type: "Scripted",
    language: "English",
    genres: ["Drama", "Fantasy", "Science-Fiction"],
    status: "Running",
    runtime: 60,
    premiered: "2016-07-15",
    officialSite: "https://www.netflix.com/title/80057281",
    schedule: { time: "", days: ["Thursday"] },
    rating: { average: 8.7 },
    weight: 98,
    network: null,
    webChannel: { id: 1, name: "Netflix", country: null },
    externals: { tvrage: 48493, thetvdb: 305288, imdb: "tt4574334" },
    image: {
      medium:
        "http://static.tvmaze.com/uploads/images/medium_portrait/200/501942.jpg",
      original:
        "http://static.tvmaze.com/uploads/images/original_untouched/200/501942.jpg",
    },
    summary:
      "<p>A love letter to the '80s classics that captivated a generation, <b>Stranger Things</b> is set in 1983 Indiana, where a young boy vanishes into thin air. As friends, family and local police search for answers, they are drawn into an extraordinary mystery involving top-secret government experiments, terrifying supernatural forces and one very strange little girl.</p>",
    updated: 1599468817,
    _links: {
      self: { href: "http://api.tvmaze.com/shows/2993" },
      previousepisode: { href: "http://api.tvmaze.com/episodes/1576476" },
    },
    _embedded: {
      episodes: [
        {
          id: 553946,
          url:
            "http://www.tvmaze.com/episodes/553946/stranger-things-1x01-chapter-one-the-vanishing-of-will-byers",
          name: "Chapter One: The Vanishing of Will Byers",
          season: 1,
          number: 1,
          airdate: "2016-07-15",
          airtime: "",
          airstamp: "2016-07-15T12:00:00+00:00",
          runtime: 60,
          image: {
            medium:
              "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg",
            original:
              "http://static.tvmaze.com/uploads/images/original_untouched/67/168918.jpg",
          },
          summary:
            "<p>A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boy's friends conduct their own search, and meet a mysterious girl in the forest.</p>",
          _links: { self: { href: "http://api.tvmaze.com/episodes/553946" } },
        },
        {
          id: 578663,
          url:
            "http://www.tvmaze.com/episodes/578663/stranger-things-1x02-chapter-two-the-weirdo-on-maple-street",
          name: "Chapter Two: The Weirdo on Maple Street",
          season: 1,
          number: 2,
          airdate: "2016-07-15",
          airtime: "",
          airstamp: "2016-07-15T12:00:00+00:00",
          runtime: 60,
          image: {
            medium:
              "http://static.tvmaze.com/uploads/images/medium_landscape/72/181376.jpg",
            original:
              "http://static.tvmaze.com/uploads/images/original_untouched/72/181376.jpg",
          },
          summary:
            "<p>While the search for the missing Will continues, Joyce tells Jim about a call she apparently received from her son. Meanwhile, Jane warns Mike that there are bad people after her, and he realizes that she knows what happened to Will.</p>",
          _links: { self: { href: "http://api.tvmaze.com/episodes/578663" } },
        },
        {
          id: 578664,
          url:
            "http://www.tvmaze.com/episodes/578664/stranger-things-1x03-chapter-three-holly-jolly",
          name: "Chapter Three: Holly, Jolly",
          season: 1,
          number: 3,
          airdate: "2016-07-15",
          airtime: "",
          airstamp: "2016-07-15T12:00:00+00:00",
          runtime: 60,
          image: {
            medium:
              "http://static.tvmaze.com/uploads/images/medium_landscape/67/168920.jpg",
            original:
              "http://static.tvmaze.com/uploads/images/original_untouched/67/168920.jpg",
          },
          summary:
            "<p>While Nancy looks for a missing Barbara and realizes that Jonathan may have been the last person to see her, Mike and his friends go out with Jane to find the missing Will. Meanwhile, Jim tracks Will to the lab.</p>",
          _links: { self: { href: "http://api.tvmaze.com/episodes/578664" } },
        },
        {
          id: 578665,
          url:
            "http://www.tvmaze.com/episodes/578665/stranger-things-1x04-chapter-four-the-body",
          name: "Chapter Four: The Body",
          season: 1,
          number: 4,
          airdate: "2016-07-15",
          airtime: "",
          airstamp: "2016-07-15T12:00:00+00:00",
          runtime: 60,
          image: {
            medium:
              "http://static.tvmaze.com/uploads/images/medium_landscape/67/168921.jpg",
            original:
              "http://static.tvmaze.com/uploads/images/original_untouched/67/168921.jpg",
          },
          summary:
            "<p>Jim realizes that the government is covering something up about Will's death and begins a personal investigation. Meanwhile, Nancy discovers that Jonathan has information about Barbara's disappearance, while Mike and his friends smuggle Jane into the school so she can use the ham radio to contact Will.</p>",
          _links: { self: { href: "http://api.tvmaze.com/episodes/578665" } },
        },
        {
          id: 578666,
          url:
            "http://www.tvmaze.com/episodes/578666/stranger-things-1x05-chapter-five-the-flea-and-the-acrobat",
          name: "Chapter Five: The Flea and the Acrobat",
          season: 1,
          number: 5,
          airdate: "2016-07-15",
          airtime: "",
          airstamp: "2016-07-15T12:00:00+00:00",
          runtime: 60,
          image: {
            medium:
              "http://static.tvmaze.com/uploads/images/medium_landscape/67/168922.jpg",
            original:
              "http://static.tvmaze.com/uploads/images/original_untouched/67/168922.jpg",
          },
          summary:
            "<p>Jim searches for Will at Hawkins Laboratory, but finds something unexpected. Meanwhile, Lonnie helps Joyce bury Will but reveals an ulterior motive for returning to town, while the boys find a way to locate Will but discover that Jane is opposing them.</p>",
          _links: { self: { href: "http://api.tvmaze.com/episodes/578666" } },
        },
        {
          id: 578667,
          url:
            "http://www.tvmaze.com/episodes/578667/stranger-things-1x06-chapter-six-the-monster",
          name: "Chapter Six: The Monster",
          season: 1,
          number: 6,
          airdate: "2016-07-15",
          airtime: "",
          airstamp: "2016-07-15T12:00:00+00:00",
          runtime: 60,
          image: {
            medium:
              "http://static.tvmaze.com/uploads/images/medium_landscape/67/168923.jpg",
            original:
              "http://static.tvmaze.com/uploads/images/original_untouched/67/168923.jpg",
          },
          summary:
            "<p>Jonathan manages to pull Nancy back to the real world from the Upside Down. Meanwhile, Lucas refuses to help with the search for Jane and goes to Hawkins Labs on his own, while Dustin and Mike look for the missing girl.</p>",
          _links: { self: { href: "http://api.tvmaze.com/episodes/578667" } },
        },
        {
          id: 578668,
          url:
            "http://www.tvmaze.com/episodes/578668/stranger-things-1x07-chapter-seven-the-bathtub",
          name: "Chapter Seven: The Bathtub",
          season: 1,
          number: 7,
          airdate: "2016-07-15",
          airtime: "",
          airstamp: "2016-07-15T12:00:00+00:00",
          runtime: 60,
          image: {
            medium:
              "http://static.tvmaze.com/uploads/images/medium_landscape/67/168925.jpg",
            original:
              "http://static.tvmaze.com/uploads/images/original_untouched/67/168925.jpg",
          },
          summary:
            "<p>Jim manages to bring everyone together so that they can join forces to reconnect Jane to the Upside Down and find Will. Meanwhile, the government closes in on Jane and the boys.</p>",
          _links: { self: { href: "http://api.tvmaze.com/episodes/578668" } },
        },
        {
          id: 578669,
          url:
            "http://www.tvmaze.com/episodes/578669/stranger-things-1x08-chapter-eight-the-upside-down",
          name: "Chapter Eight: The Upside Down",
          season: 1,
          number: 8,
          airdate: "2016-07-15",
          airtime: "",
          airstamp: "2016-07-15T12:00:00+00:00",
          runtime: 60,
          image: {
            medium:
              "http://static.tvmaze.com/uploads/images/medium_landscape/67/168926.jpg",
            original:
              "http://static.tvmaze.com/uploads/images/original_untouched/67/168926.jpg",
          },
          summary:
            "<p>Jim convinces Brenner to let him and Joyce enter the Upside Down to find Will... unaware that Brenner plans to recover Jane no matter what it takes. Meanwhile, Nancy and Jonathan prepare to trap the monster at the Byers house, but receive an unexpected visitor.</p>",
          _links: { self: { href: "http://api.tvmaze.com/episodes/578669" } },
        },
        {
          id: 909340,
          url:
            "http://www.tvmaze.com/episodes/909340/stranger-things-2x01-chapter-one-madmax",
          name: "Chapter One: MADMAX",
          season: 2,
          number: 1,
          airdate: "2017-10-27",
          airtime: "",
          airstamp: "2017-10-27T12:00:00+00:00",
          runtime: 60,
          image: {
            medium:
              "http://static.tvmaze.com/uploads/images/medium_landscape/132/331976.jpg",
            original:
              "http://static.tvmaze.com/uploads/images/original_untouched/132/331976.jpg",
          },
          summary:
            "<p>One year after the events with the Upside Down and the Demogorgon, Will meets with a government doctor. The boys discover that there's a new player in town, and Jim pays a visit to El.</p>",
          _links: { self: { href: "http://api.tvmaze.com/episodes/909340" } },
        },
        {
          id: 909342,
          url:
            "http://www.tvmaze.com/episodes/909342/stranger-things-2x02-chapter-two-trick-or-treat-freak",
          name: "Chapter Two: Trick or Treat, Freak",
          season: 2,
          number: 2,
          airdate: "2017-10-27",
          airtime: "",
          airstamp: "2017-10-27T12:00:00+00:00",
          runtime: 60,
          image: {
            medium:
              "http://static.tvmaze.com/uploads/images/medium_landscape/132/332034.jpg",
            original:
              "http://static.tvmaze.com/uploads/images/original_untouched/132/332034.jpg",
          },
          summary:
            "<p>The boys go trick-or-treating on Halloween, and Will has another vision. Meanwhile, El relieves the days following her escape from the Upside Down, and Dustin finds something in the garbage can.</p>",
          _links: { self: { href: "http://api.tvmaze.com/episodes/909342" } },
        },
        {
          id: 909343,
          url:
            "http://www.tvmaze.com/episodes/909343/stranger-things-2x03-chapter-three-the-pollywog",
          name: "Chapter Three: The Pollywog",
          season: 2,
          number: 3,
          airdate: "2017-10-27",
          airtime: "",
          airstamp: "2017-10-27T12:00:00+00:00",
          runtime: 60,
          image: {
            medium:
              "http://static.tvmaze.com/uploads/images/medium_landscape/132/332039.jpg",
            original:
              "http://static.tvmaze.com/uploads/images/original_untouched/132/332039.jpg",
          },
          summary:
            "<p>Dustin takes in a stray and calls it D'Artagnan. However, his plans to show it to Mr. Clarke don't go as intended. Meanwhile, Max tries to convince Mike to let her join the group, El sneaks out to pay her friends a visit, and Will decides to take a stand and face his fears.</p>",
          _links: { self: { href: "http://api.tvmaze.com/episodes/909343" } },
        },
        {
          id: 909344,
          url:
            "http://www.tvmaze.com/episodes/909344/stranger-things-2x04-chapter-four-will-the-wise",
          name: "Chapter Four: Will the Wise",
          season: 2,
          number: 4,
          airdate: "2017-10-27",
          airtime: "",
          airstamp: "2017-10-27T12:00:00+00:00",
          runtime: 60,
          image: {
            medium:
              "http://static.tvmaze.com/uploads/images/medium_landscape/132/332045.jpg",
            original:
              "http://static.tvmaze.com/uploads/images/original_untouched/132/332045.jpg",
          },
          summary:
            "<p>After his encounter with the shadow creature, Will's condition worsens. Meanwhile, Jim and El fight after Jim discovers that El disobeyed the rules, and Owens brings Nancy and Jonathan to Hawkins Labs for a chat.</p>",
          _links: { self: { href: "http://api.tvmaze.com/episodes/909344" } },
        },
        {
          id: 909345,
          url:
            "http://www.tvmaze.com/episodes/909345/stranger-things-2x05-chapter-five-dig-dug",
          name: "Chapter Five: Dig Dug",
          season: 2,
          number: 5,
          airdate: "2017-10-27",
          airtime: "",
          airstamp: "2017-10-27T12:00:00+00:00",
          runtime: 60,
          image: {
            medium:
              "http://static.tvmaze.com/uploads/images/medium_landscape/132/332050.jpg",
            original:
              "http://static.tvmaze.com/uploads/images/original_untouched/132/332050.jpg",
          },
          summary:
            "<p>Jim is trapped in the Upside Down, and Joyce enlists Bob to help find him. Meanwhile, Nancy and Jonathan go to Murray, and El learns about the circumstances surrounding her birth.</p>",
          _links: { self: { href: "http://api.tvmaze.com/episodes/909345" } },
        },
        {
          id: 909346,
          url:
            "http://www.tvmaze.com/episodes/909346/stranger-things-2x06-chapter-six-the-spy",
          name: "Chapter Six: The Spy",
          season: 2,
          number: 6,
          airdate: "2017-10-27",
          airtime: "",
          airstamp: "2017-10-27T12:00:00+00:00",
          runtime: 60,
          image: {
            medium:
              "http://static.tvmaze.com/uploads/images/medium_landscape/132/332052.jpg",
            original:
              "http://static.tvmaze.com/uploads/images/original_untouched/132/332052.jpg",
          },
          summary:
            "<p>Owens and his team try to find a way to end the shadow creature's influence on Will. Meanwhile, Dustin and Lucas find unlikely allies in their quest to find Dart.</p>",
          _links: { self: { href: "http://api.tvmaze.com/episodes/909346" } },
        },
        {
          id: 909347,
          url:
            "http://www.tvmaze.com/episodes/909347/stranger-things-2x07-chapter-seven-the-lost-sister",
          name: "Chapter Seven: The Lost Sister",
          season: 2,
          number: 7,
          airdate: "2017-10-27",
          airtime: "",
          airstamp: "2017-10-27T12:00:00+00:00",
          runtime: 60,
          image: {
            medium:
              "http://static.tvmaze.com/uploads/images/medium_landscape/132/332055.jpg",
            original:
              "http://static.tvmaze.com/uploads/images/original_untouched/132/332055.jpg",
          },
          summary:
            "<p>El travels to Chicago to find her sister Eight, aka Kali, who has teamed up with other outcasts to kill the men who tormented her at Hawkins Labs.</p>",
          _links: { self: { href: "http://api.tvmaze.com/episodes/909347" } },
        },
        {
          id: 909348,
          url:
            "http://www.tvmaze.com/episodes/909348/stranger-things-2x08-chapter-eight-the-mind-flayer",
          name: "Chapter Eight: The Mind Flayer",
          season: 2,
          number: 8,
          airdate: "2017-10-27",
          airtime: "",
          airstamp: "2017-10-27T12:00:00+00:00",
          runtime: 60,
          image: {
            medium:
              "http://static.tvmaze.com/uploads/images/medium_landscape/132/332059.jpg",
            original:
              "http://static.tvmaze.com/uploads/images/original_untouched/132/332059.jpg",
          },
          summary:
            "<p>When the demo-dogs overrun Hawkins Labs, one of the group saves the others at the cost of their own life. When the others get back to the Byers house, they realize what they're facing and try to get answers from a captive Will.</p>",
          _links: { self: { href: "http://api.tvmaze.com/episodes/909348" } },
        },
        {
          id: 909349,
          url:
            "http://www.tvmaze.com/episodes/909349/stranger-things-2x09-chapter-nine-the-gate",
          name: "Chapter Nine: The Gate",
          season: 2,
          number: 9,
          airdate: "2017-10-27",
          airtime: "",
          airstamp: "2017-10-27T12:00:00+00:00",
          runtime: 60,
          image: {
            medium:
              "http://static.tvmaze.com/uploads/images/medium_landscape/132/332064.jpg",
            original:
              "http://static.tvmaze.com/uploads/images/original_untouched/132/332064.jpg",
          },
          summary:
            "<p>The group splits up to close the gate, evict the Mind Flayer from Will, and drive the demo-dogs away from Hawkins Lab.</p>",
          _links: { self: { href: "http://api.tvmaze.com/episodes/909349" } },
        },
        {
          id: 1576469,
          url:
            "http://www.tvmaze.com/episodes/1576469/stranger-things-3x01-chapter-one-suzie-do-you-copy",
          name: "Chapter One: Suzie, Do You Copy?",
          season: 3,
          number: 1,
          airdate: "2019-07-04",
          airtime: "",
          airstamp: "2019-07-04T12:00:00+00:00",
          runtime: 51,
          image: {
            medium:
              "http://static.tvmaze.com/uploads/images/medium_landscape/204/510098.jpg",
            original:
              "http://static.tvmaze.com/uploads/images/original_untouched/204/510098.jpg",
          },
          summary:
            "<p>Things change over the summer: Jonathan, Nancy, Steve, and Billy get jobs; Dustin goes to science camp; El and Mike become an item; Lucas and Max almost become an item. Meanwhile, mysterious power outages plague Hawkins and rats start exploding.</p>",
          _links: { self: { href: "http://api.tvmaze.com/episodes/1576469" } },
        },
        {
          id: 1576470,
          url:
            "http://www.tvmaze.com/episodes/1576470/stranger-things-3x02-chapter-two-the-mall-rats",
          name: "Chapter Two: The Mall Rats",
          season: 3,
          number: 2,
          airdate: "2019-07-04",
          airtime: "",
          airstamp: "2019-07-04T12:00:00+00:00",
          runtime: 50,
          image: {
            medium:
              "http://static.tvmaze.com/uploads/images/medium_landscape/204/511261.jpg",
            original:
              "http://static.tvmaze.com/uploads/images/original_untouched/204/511261.jpg",
          },
          summary:
            "<p>While El and Max go shopping, Nancy and Wheeler follow up on the exploding rats. Billy takes a coworker on a field trip, and Joyce blows off dinner with Jim to meet with Mr. Clarke.</p>",
          _links: { self: { href: "http://api.tvmaze.com/episodes/1576470" } },
        },
        {
          id: 1576471,
          url:
            "http://www.tvmaze.com/episodes/1576471/stranger-things-3x03-chapter-three-the-case-of-the-missing-lifeguard",
          name: "Chapter Three: The Case of the Missing Lifeguard",
          season: 3,
          number: 3,
          airdate: "2019-07-04",
          airtime: "",
          airstamp: "2019-07-04T12:00:00+00:00",
          runtime: 50,
          image: {
            medium:
              "http://static.tvmaze.com/uploads/images/medium_landscape/204/511286.jpg",
            original:
              "http://static.tvmaze.com/uploads/images/original_untouched/204/511286.jpg",
          },
          summary:
            "<p>El goes astrally projecting and discovers that Billy has done something with Heather. While the girls try to find the missing lifeguard, Will tries to get Mike and Lucas interested in D&amp;D. Dustin and Steve spy on the mall shops, and Robin tries to decipher the Russian message.</p>",
          _links: { self: { href: "http://api.tvmaze.com/episodes/1576471" } },
        },
        {
          id: 1576472,
          url:
            "http://www.tvmaze.com/episodes/1576472/stranger-things-3x04-chapter-four-the-sauna-test",
          name: "Chapter Four: The Sauna Test",
          season: 3,
          number: 4,
          airdate: "2019-07-04",
          airtime: "",
          airstamp: "2019-07-04T12:00:00+00:00",
          runtime: 53,
          image: {
            medium:
              "http://static.tvmaze.com/uploads/images/medium_landscape/204/511312.jpg",
            original:
              "http://static.tvmaze.com/uploads/images/original_untouched/204/511312.jpg",
          },
          summary:
            "<p>Mike, Lucas, and Will recruit El and Max to help them learn who the Mind Flayer's host is. Robin, Steve, and Dustin recruit someone to sneak into Lynx, and Nancy and Jonathan are fired.</p>",
          _links: { self: { href: "http://api.tvmaze.com/episodes/1576472" } },
        },
        {
          id: 1576473,
          url:
            "http://www.tvmaze.com/episodes/1576473/stranger-things-3x05-chapter-five-the-flayed",
          name: "Chapter Five: The Flayed",
          season: 3,
          number: 5,
          airdate: "2019-07-04",
          airtime: "",
          airstamp: "2019-07-04T12:00:00+00:00",
          runtime: 52,
          image: {
            medium:
              "http://static.tvmaze.com/uploads/images/medium_landscape/204/510102.jpg",
            original:
              "http://static.tvmaze.com/uploads/images/original_untouched/204/510102.jpg",
          },
          summary:
            "<p>The Scoop Group explore the tunnels beneath Starcourt, while Nancy and Jonathan recruit Mike and the others to help them discover what happen to the Holloways and find the Mind Flayer's base of operations.</p>",
          _links: { self: { href: "http://api.tvmaze.com/episodes/1576473" } },
        },
        {
          id: 1576474,
          url:
            "http://www.tvmaze.com/episodes/1576474/stranger-things-3x06-chapter-six-e-pluribus-unum",
          name: "Chapter Six: E Pluribus Unum",
          season: 3,
          number: 6,
          airdate: "2019-07-04",
          airtime: "",
          airstamp: "2019-07-04T12:00:00+00:00",
          runtime: 60,
          image: {
            medium:
              "http://static.tvmaze.com/uploads/images/medium_landscape/204/511681.jpg",
            original:
              "http://static.tvmaze.com/uploads/images/original_untouched/204/511681.jpg",
          },
          summary:
            "<p>Dr. Alexei reveals what the Russians have been building, and Eleven sees where Billy has been. Dustin and Erica stage a daring rescue.</p>",
          _links: { self: { href: "http://api.tvmaze.com/episodes/1576474" } },
        },
        {
          id: 1576475,
          url:
            "http://www.tvmaze.com/episodes/1576475/stranger-things-3x07-chapter-seven-the-bite",
          name: "Chapter Seven: The Bite",
          season: 3,
          number: 7,
          airdate: "2019-07-04",
          airtime: "",
          airstamp: "2019-07-04T12:00:00+00:00",
          runtime: 55,
          image: {
            medium:
              "http://static.tvmaze.com/uploads/images/medium_landscape/204/511708.jpg",
            original:
              "http://static.tvmaze.com/uploads/images/original_untouched/204/511708.jpg",
          },
          summary:
            "<p>El and the others defend themselves as the Flayer tracks them down. The Scoop Group escape the Russian base and hide in a movie theater, but the Russians close in on them.</p>",
          _links: { self: { href: "http://api.tvmaze.com/episodes/1576475" } },
        },
        {
          id: 1576476,
          url:
            "http://www.tvmaze.com/episodes/1576476/stranger-things-3x08-chapter-eight-the-battle-of-starcourt",
          name: "Chapter Eight: The Battle of Starcourt",
          season: 3,
          number: 8,
          airdate: "2019-07-04",
          airtime: "",
          airstamp: "2019-07-04T12:00:00+00:00",
          runtime: 78,
          image: {
            medium:
              "http://static.tvmaze.com/uploads/images/medium_landscape/204/510105.jpg",
            original:
              "http://static.tvmaze.com/uploads/images/original_untouched/204/510105.jpg",
          },
          summary:
            "<p>The Flayer comes to the mall to get El, and Dustin contacts Suzie to provide Jim and Joyce with needed information. El reminds Billy of his past, and Jim and Joyce have an argument about not arguing.</p>",
          _links: { self: { href: "http://api.tvmaze.com/episodes/1576476" } },
        },
        {
          id: 1752754,
          url:
            "http://www.tvmaze.com/episodes/1752754/stranger-things-4x01-chapter-one-the-hellfire-club",
          name: "Chapter One: The Hellfire Club",
          season: 4,
          number: 1,
          airdate: "",
          airtime: "",
          airstamp: null,
          runtime: 60,
          image: null,
          summary: null,
          _links: { self: { href: "http://api.tvmaze.com/episodes/1752754" } },
        },
      ],
    },
};

test("render episodes when page loads",  () => {
    render(<Episodes episodes={[]} />);
});

mockFetchShow.mockResolvedValue(data);

test("render episodes when page loads", async () => {
    const { rerender } = render(<Episodes episodes={[]} />);
    rerender(<Episodes episodes={data._embedded.episodes} />);
});

// test("render episodes when page loads", async () => {
//   // mockFetchShow.mockResolvedValueOnce(data);

//   render(<Episodes episodes={data} />);

//   // wait for screen to load
//   // await screen.findAllByText(/stranger things/i);

//   // const dropdown = screen.getByPlaceholderText('Select a season');
//   // userEvent.click(dropdown);

//   // wait for the show to render
// //   await screen.findAllByText(/stranger things/i);
// //   // do the dropdown
// //   const dropdown = await screen.findByText(/select a season/i);
// //   userEvent.click(dropdown);
// //   const season1 = await screen.findByText(/season 1/i);
// //   userEvent.click(season1);
// //   // assert that episode 1 is now rendered
// //   const ep1 = await screen.findAllByText(/chapter one/i);
// //   expect(ep1[0]).toBeVisible();
// });
