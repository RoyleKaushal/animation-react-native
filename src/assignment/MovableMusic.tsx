import { View, Image, Text, ScrollView } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

export default function MovableMusic() {
  const ALBUM_COVERS = {
    DISCOVERY:
      'https://upload.wikimedia.org/wikipedia/en/a/ae/Daft_Punk_-_Discovery.jpg',
    HUMAN_AFTER_ALL:
      'https://upload.wikimedia.org/wikipedia/en/0/0d/Humanafterall.jpg',
    HOMEWORK:
      'https://upload.wikimedia.org/wikipedia/en/9/9c/Daftpunk-homework.jpg',
    RANDOM_ACCESS_MEMORIES:
      'https://upload.wikimedia.org/wikipedia/en/a/a7/Random_Access_Memories.jpg',
  };

  const DAFT_PUNK = 'Daft Punk';
  const SONGS = [
    {
      id: 'one-more-time',
      title: 'One More Time',
      artist: DAFT_PUNK,
      cover: ALBUM_COVERS.HUMAN_AFTER_ALL,
    },
    {
      id: 'digital-love',
      title: 'Digital Love',
      artist: DAFT_PUNK,
      cover: ALBUM_COVERS.HUMAN_AFTER_ALL,
    },
    {
      id: 'nightvision',
      title: 'Nightvision',
      artist: DAFT_PUNK,
      cover: ALBUM_COVERS.HUMAN_AFTER_ALL,
    },
    {
      id: 'something-about-us',
      title: 'Something About Us',
      artist: DAFT_PUNK,
      cover: ALBUM_COVERS.HUMAN_AFTER_ALL,
    },
    {
      id: 'veridis-quo',
      title: 'Veridis Quo',
      artist: DAFT_PUNK,
      cover: ALBUM_COVERS.HUMAN_AFTER_ALL,
    },
    {
      id: 'make-love',
      title: 'Make Love',
      artist: DAFT_PUNK,
      cover: ALBUM_COVERS.HUMAN_AFTER_ALL,
    },
    {
      id: 'television-rules-the-nation',
      title: 'Television Rules the Nation',
      artist: DAFT_PUNK,
      cover: ALBUM_COVERS.HUMAN_AFTER_ALL,
    },
    {
      id: 'phoenix',
      title: 'Phoenix',
      artist: DAFT_PUNK,
      cover: ALBUM_COVERS.HOMEWORK,
    },
    {
      id: 'revolution-909',
      title: 'Revolution 909',
      artist: DAFT_PUNK,
      cover: ALBUM_COVERS.HOMEWORK,
    },
    {
      id: 'around-the-world',
      title: 'Around the World',
      artist: DAFT_PUNK,
      cover: ALBUM_COVERS.HOMEWORK,
    },
    {
      id: 'within',
      title: 'Within',
      artist: DAFT_PUNK,
      cover: ALBUM_COVERS.HUMAN_AFTER_ALL,
    },
    {
      id: 'touch',
      title: 'Touch (feat. Paul Williams)',
      artist: DAFT_PUNK,
      cover: ALBUM_COVERS.HUMAN_AFTER_ALL,
    },
    {
      id: 'beyond',
      title: 'Beyond',
      artist: DAFT_PUNK,
      cover: ALBUM_COVERS.HUMAN_AFTER_ALL,
    },
    {
      id: 'motherboard',
      title: 'Motherboard',
      artist: DAFT_PUNK,
      cover: ALBUM_COVERS.HUMAN_AFTER_ALL,
    },
  ];

  const SONG_HEIGHT = 70;
  const SCROLL_HEIGHT_THRESHOLD = SONG_HEIGHT;

  function Song(params: any) {
    const { cover, title, artist, unique, index } = params;
    const top = useSharedValue(index * SONG_HEIGHT + 20);
    const animatedStyle = useAnimatedStyle(() => {
      return {
        position: 'absolute',
        left: 0,
        right: 0,
        top: top.value,
        zIndex: 1,
        shadowColor: 'black',
        shadowOffset: {
          height: 0,
          width: 0,
        },
        shadowOpacity: withSpring(0.2),
        shadowRadius: 10,
      };
    });

    const gesture = Gesture.Pan()
      .onStart(() => {})
      .onUpdate(() => {})
      .onEnd(() => {});
    return (
      <GestureDetector gesture={gesture}>
        <Animated.View
          style={[
            {
              flexDirection: 'row',
              alignItems: 'center',
              height: SONG_HEIGHT,
              padding: 10,
            },
            animatedStyle,
          ]}
          key={unique}
        >
          <Image
            source={{ uri: cover }}
            style={{ height: 50, width: 50, borderRadius: 4 }}
          />

          <View
            style={{
              marginLeft: 10,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: '600',
                marginBottom: 4,
              }}
            >
              {title}
            </Text>

            <Text style={{ fontSize: 12, color: 'gray' }}>{artist}</Text>
          </View>
        </Animated.View>
      </GestureDetector>
    );
  }

  return (
    <ScrollView>
      {SONGS.map((song: any, index: number) => {
        return (
          <Song
            artist={song.artist}
            cover={song.cover}
            title={song.title}
            unique={song.id}
            index={index}
          />
        );
      })}
    </ScrollView>
  );
}
