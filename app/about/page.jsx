import React from "react";
import Link from "next/link";
import { MessageCircle, Users, Globe, Zap, Shield, Heart } from "lucide-react";

export default function AboutPage() {
  const features = [
    {
      icon: <MessageCircle className="w-8 h-8 text-blue-400" />,
      title: "Real-time Conversations",
      description:
        "Engage in instant messaging with people around the world on topics that matter to you.",
    },
    {
      icon: <Users className="w-8 h-8 text-green-400" />,
      title: "Topic-based Communities",
      description:
        "Join specialized chat rooms focused on your interests, from tech and gaming to arts and lifestyle.",
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-400" />,
      title: "Global Connections",
      description:
        "Connect with like-minded individuals from different cultures and backgrounds worldwide.",
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: "Lightning Fast",
      description:
        "Built with modern technology to ensure smooth, lag-free conversations every time.",
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: "Safe & Secure",
      description:
        "Your privacy matters. We implement robust security measures to protect your conversations.",
    },
    {
      icon: <Heart className="w-8 h-8 text-pink-400" />,
      title: "Community Driven",
      description:
        "Built by chat enthusiasts, for chat enthusiasts. Your feedback shapes our platform.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
              About EchoChats
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Where conversations come alive. Connect, share, and discover
              through the power of real-time communication.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              We believe that meaningful conversations have the power to bridge
              gaps, spark innovation, and create lasting connections. Our
              platform is designed to bring people together around shared
              interests and passions.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Whether you are discussing the latest tech trends, sharing
              creative ideas, or simply looking for friendly conversation,
              EchoChats provides the perfect space for authentic human
              interaction.
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-20"></div>
            <div className="relative bg-gray-900 rounded-2xl p-8 border border-gray-700">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-400 mb-2">
                    50K+
                  </div>
                  <div className="text-gray-400">Active Users</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-400 mb-2">
                    1M+
                  </div>
                  <div className="text-gray-400">Messages Sent</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-400 mb-2">
                    100+
                  </div>
                  <div className="text-gray-400">Topic Channels</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-pink-400 mb-2">
                    24/7
                  </div>
                  <div className="text-gray-400">Active Community</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Why Choose EchoChats?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We have built more than just a chat app - we have created a platform
            that fosters genuine connections and meaningful conversations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-gray-600 transition-all duration-300 h-full">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gray-900/50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Our Values</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Inclusivity
              </h3>
              <p className="text-gray-300">
                Everyone deserves a voice. We celebrate diversity and create
                spaces where all perspectives are welcome.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Privacy</h3>
              <p className="text-gray-300">
                Your conversations are yours. We implement strong security
                measures to protect your data and privacy.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Authenticity
              </h3>
              <p className="text-gray-300">
                Real connections happen when people can be themselves. We foster
                genuine, authentic interactions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Built by Creators
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            EchoChats was born from a simple idea: what if we could make online
            conversations feel as natural and engaging as talking with friends
            in person?
          </p>
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 border border-gray-700 max-w-4xl mx-auto">
          <p className="text-lg text-gray-300 leading-relaxed text-center">
            "We started EchoChats because we saw a gap in how people communicate
            online. Most platforms focus on broadcasting or quick exchanges, but
            we wanted to create something that encourages deeper, more
            meaningful conversations. Every feature we build is designed with
            one goal in mind: helping people connect authentically."
          </p>
          <div className="text-center mt-6">
            <div className="text-blue-400 font-semibold">
              - The EchoChats Team
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 via-purple-900/30 to-pink-900/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Join the Conversation?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Discover new perspectives, share your passions, and connect with an
            amazing community of thinkers and creators.
          </p>
          <Link href="/forums">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
              Start Chatting Today
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
