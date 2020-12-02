import * as React from "react";
import { ScrollView, View, Text } from "react-native";
import axios from "axios";
import Loading from "./Loading";
import moment from "moment";

axios.defaults.baseURL =
  "https://us-central1-wikiblog-95cf6.cloudfunctions.net";

class Blog extends React.Component {
  state = {
    posts: []
  };
  componentDidMount() {
    axios.get(`getAllPosts`).then(res => {
      let data = res.data;
      data.sort((a, b) => b.date._seconds - a.date._seconds);
      this.setState({ posts: res.data });
    });
  }

  render() {
    return (
      <ScrollView style={{ flex: 1, flexDirection: "column", width: "100%" }}>
        {this.state.posts.length === 0 && <Loading />}
        {this.state.posts.map((post, i) => (
          <Post post={post} key={i} />
        ))}
      </ScrollView>
    );
  }
}

const Post = props => {
  if (!props.post) return <div />;
  return (
    <View style={{ flexWrap: "wrap" }}>
      <Text
        style={{ width: "100%", padding: 20, fontWeight: "bold", fontSize: 24 }}
      >
        {props.post.title}
      </Text>
      {props.post.date && (
        <Text style={{ color: "#aaa", paddingLeft: 20, fontSize: 10 }}>
          {moment(props.post.date._seconds * 1000).format("Do MMM YYYY")}
        </Text>
      )}
      <Text style={{ width: "100%", padding: 20 }}>{props.post.body}</Text>
    </View>
  );
};

export default Blog;
