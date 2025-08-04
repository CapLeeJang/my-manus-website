import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { MapPin, Play, Heart, Search, Menu, ExternalLink, X, Calendar, Clock, Route } from 'lucide-react'
import './App.css'

// Import images
import heroImage from './assets/hero-image.jpg'
import thumbnailJejuBeach from './assets/thumbnail-jeju-beach.jpg'
import thumbnailOreumBest6 from './assets/thumbnail-oreum-best6.jpg'
import thumbnailOreumTravelwriter from './assets/thumbnail-oreum-travelwriter.jpg'
import thumbnailDongmunMarket from './assets/thumbnail-dongmun-market.jpg'
import thumbnailLocalFood from './assets/thumbnail-local-food.jpg'
import thumbnailHiddenGems from './assets/thumbnail-hidden-gems.jpg'
import thumbnailSeongsanIlchulbong from './assets/thumbnail-seongsan-ilchulbong.jpg'
import thumbnailHiddenGemsNew from './assets/thumbnail-hidden-gems-new.jpg'

function App() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [showLocationModal, setShowLocationModal] = useState(false)
  const [showCourseModal, setShowCourseModal] = useState(false)

  // Travel course data
  const travelCourses = {
    jeju: [
      {
        id: 1,
        title: "제주시 동부 자연 & 문화 탐방",
        subtitle: "동부 해안과 오름의 조화",
        duration: "2박 3일",
        theme: "자연경관 + 문화체험",
        highlights: ["월정리 해변", "다랑쉬오름", "성산일출봉", "돌문화공원", "동문시장"],
        days: [
          {
            day: 1,
            title: "동부 해안과 오름의 조화",
            activities: [
              "제주공항 도착 → 월정리 해변 → 김녕 해수욕장",
              "다랑쉬오름 등반 → 비자림 산책",
              "구좌읍/성산읍 숙소 체크인"
            ]
          },
          {
            day: 2,
            title: "오름과 숨은 명소 탐험",
            activities: [
              "성산일출봉 → 오조포구",
              "돌문화공원 → 노루생태공원",
              "동문시장 야시장"
            ]
          },
          {
            day: 3,
            title: "제주시 시내와 서부 해안",
            activities: [
              "이호테우 해수욕장 → 곽지과물 해변",
              "제주시 로컬 맛집 탐방",
              "제주공항 출국"
            ]
          }
        ]
      },
      {
        id: 2,
        title: "제주시 서부 힐링 & 액티비티",
        subtitle: "서부 해안의 매력",
        duration: "2박 3일",
        theme: "힐링 + 액티비티",
        highlights: ["협재 해수욕장", "새별오름", "문도지오름", "애월 해안도로", "닭머르"],
        days: [
          {
            day: 1,
            title: "서부 해안의 매력",
            activities: [
              "제주공항 도착 → 협재 해수욕장 → 금능 해변",
              "새별오름 등반 → 애월 해안도로 드라이브",
              "애월읍/한림읍 숙소 체크인"
            ]
          },
          {
            day: 2,
            title: "오름과 숨은 명소 탐험",
            activities: [
              "문도지오름 → 한수리 방파제",
              "닭머르 일몰 감상 → 지미봉",
              "동문시장 또는 로컬 맛집"
            ]
          },
          {
            day: 3,
            title: "제주시 시내와 출국",
            activities: [
              "제주시 시내 쇼핑",
              "공항 근처 마지막 식사",
              "제주공항 출국"
            ]
          }
        ]
      }
    ],
    seogwipo: [
      {
        id: 3,
        title: "서귀포시 동부 자연 & 힐링",
        subtitle: "동부의 아름다운 자연",
        duration: "2박 3일",
        theme: "자연 + 힐링",
        highlights: ["표선 해변", "성산일출봉", "박수기정", "서귀다원", "관음사"],
        days: [
          {
            day: 1,
            title: "서귀포 동부 해안과 오름",
            activities: [
              "제주공항 도착 → 표선 해변",
              "성산일출봉 → 오조포구",
              "성산읍/표선면 숙소 체크인"
            ]
          },
          {
            day: 2,
            title: "숨은 명소와 문화 체험",
            activities: [
              "박수기정 → 서귀다원",
              "관음사 → 돌문화공원",
              "서귀포시 시내 자유시간"
            ]
          },
          {
            day: 3,
            title: "서귀포 시내와 출국",
            activities: [
              "서귀포시 시내 관광 → 매일올레시장",
              "서귀포 마지막 식사",
              "제주공항 출국"
            ]
          }
        ]
      },
      {
        id: 4,
        title: "서귀포시 서부 자연 & 액티비티",
        subtitle: "서부의 자연과 액티비티",
        duration: "2박 3일",
        theme: "자연 + 액티비티",
        highlights: ["중문색달 해변", "군산오름", "마라도", "안덕계곡", "닭머르"],
        days: [
          {
            day: 1,
            title: "서귀포 서부 해안과 오름",
            activities: [
              "제주공항 도착 → 중문색달 해변",
              "군산오름 등반 → 안덕계곡",
              "중문/안덕/대정 숙소 체크인"
            ]
          },
          {
            day: 2,
            title: "섬 속의 섬과 숨은 명소",
            activities: [
              "모슬포항 → 마라도 관광",
              "닭머르 일몰 → 한수리 방파제",
              "서귀포시 시내 저녁"
            ]
          },
          {
            day: 3,
            title: "서귀포 시내와 출국",
            activities: [
              "서귀포시 시내 쇼핑",
              "공항 근처 마지막 식사",
              "제주공항 출국"
            ]
          }
        ]
      }
    ]
  }

  // Location data for each category
  const locationData = {
    beaches: [
      { name: '이호테우 해수욕장', region: '제주시 이호동', description: '제주공항 근처, 말등대가 유명한 해변' },
      { name: '곽지과물 해변', region: '제주시 애월읍', description: '서쪽 해안, 일몰 명소' },
      { name: '협재 해수욕장', region: '제주시 한림읍', description: '서쪽 해안, 에메랄드빛 바다' },
      { name: '금능 해변', region: '제주시 한림읍', description: '협재 해변 인근, 조용한 해변' },
      { name: '월정리 해변', region: '제주시 구좌읍', description: '동쪽 해안, 카페거리로 유명' },
      { name: '김녕 해수욕장', region: '제주시 구좌읍', description: '동쪽 해안, 월정리 인근' },
      { name: '세화 해변', region: '제주시 구좌읍', description: '동쪽 해안, 성산일출봉 방향' },
      { name: '삼양 해수욕장', region: '제주시 삼양동', description: '제주시 북쪽, 검은 모래 해변' },
      { name: '중문색달 해변', region: '서귀포시 중문동', description: '남쪽 해안, 중문관광단지 내' },
      { name: '표선 해변', region: '서귀포시 표선면', description: '남동쪽 해안, 넓은 백사장' }
    ],
    oreums: [
      { name: '문도지오름', region: '제주시 구좌읍', description: '동쪽 지역, 접근성이 좋은 오름' },
      { name: '금오름', region: '제주시 한림읍', description: '서쪽 지역, 한라산 서쪽' },
      { name: '새별오름', region: '제주시 애월읍', description: '서쪽 지역, 애월 해안 근처' },
      { name: '다랑쉬오름', region: '제주시 조천읍', description: '북동쪽 지역, 조천 근처' },
      { name: '바굼지오름(단산)', region: '서귀포시 안덕면', description: '남서쪽 지역, 산방산 근처' },
      { name: '군산오름', region: '서귀포시 안덕면', description: '남서쪽 지역, 바굼지오름 인근' },
      { name: '지미봉', region: '제주시 한경면', description: '서쪽 지역, 차귀도 근처' },
      { name: '성산일출봉', region: '서귀포시 성산읍', description: '동쪽 끝, 일출 명소' }
    ],
    food: [
      { name: '제주 동문시장', region: '제주시 일도이동', description: '제주시 중심가, 전통시장' },
      { name: '팔복만두', region: '제주시 연동', description: '제주시 신제주 지역' },
      { name: '블루핀', region: '제주시 또는 서귀포시', description: '제주 내 여러 지점' },
      { name: '제라진국밥', region: '제주시 또는 서귀포시', description: '제주 향토 음식점' },
      { name: '남호식당', region: '제주시 또는 서귀포시', description: '현지인 추천 맛집' },
      { name: '정수용식당', region: '제주시 또는 서귀포시', description: '현지인 추천 맛집' }
    ],
    hidden: [
      { name: '마라도', region: '서귀포시 대정읍', description: '대한민국 최남단, 모슬포항에서 배로 이동' },
      { name: '추자도 나바론 하늘길', region: '제주시 추자면', description: '제주 북쪽 섬, 제주항에서 배로 이동' },
      { name: '안덕계곡', region: '서귀포시 안덕면', description: '남서쪽 지역, 원시림 계곡' },
      { name: '박수기정', region: '서귀포시 성산읍', description: '동쪽 지역, 성산일출봉 근처' },
      { name: '한수리 방파제', region: '제주시 한림읍', description: '서쪽 해안, 협재 근처' },
      { name: '관음사', region: '제주시 아라동', description: '한라산 북쪽 등산로 입구' },
      { name: '돌문화공원', region: '제주시 조천읍', description: '북동쪽 지역, 제주 돌 문화 체험' },
      { name: '오조포구', region: '서귀포시 성산읍', description: '동쪽 지역, 성산일출봉 근처' },
      { name: '노루생태공원', region: '제주시 구좌읍', description: '동쪽 지역, 월정리 근처' },
      { name: '닭머르', region: '제주시 한경면', description: '서쪽 지역, 일몰 명소' },
      { name: '서귀다원', region: '서귀포시 안덕면', description: '남서쪽 지역, 녹차밭' }
    ]
  }

  // YouTube video data organized by categories
  const videoData = {
    beaches: [
      {
        id: 1,
        title: "해외 뺨치게 아름다운 제주바다 20곳",
        channel: "제주에디 Jeju Eddy",
        thumbnail: thumbnailJejuBeach,
        url: "https://www.youtube.com/watch?v=ExlgiI8T0Ew",
        description: "이호테우, 곽지과물, 협재, 금능, 월정리 등 제주 최고의 해수욕장 20곳",
        duration: "19:22",
        views: "79K"
      }
    ],
    oreums: [
      {
        id: 2,
        title: "꼭 가봐야 할 제주 오름 베스트 6곳",
        channel: "GoGoMong 고고몽",
        thumbnail: thumbnailOreumBest6,
        url: "https://www.youtube.com/shorts/bZ-xYcDgHrE",
        description: "문도지오름, 금오름, 새별오름, 다랑쉬오름, 바굼지오름, 군산오름",
        duration: "0:60",
        views: "552"
      },
      {
        id: 3,
        title: "여행작가가 추천하는 숨겨진 제주 오름",
        channel: "여행작가TV",
        thumbnail: thumbnailOreumTravelwriter,
        url: "https://www.youtube.com/watch?v=IAjwOktlkaY",
        description: "자동차로 접근 가능한 오름과 드라이브 코스 소개",
        duration: "35:27",
        views: "160"
      },
      {
        id: 8,
        title: "성산일출봉 7가지 잘 알려지지 않은 이야기",
        channel: "Unknown",
        thumbnail: thumbnailSeongsanIlchulbong,
        url: "https://www.youtube.com/shorts/e5S24W_GW60",
        description: "성산일출봉의 역사와 숨겨진 이야기들",
        duration: "0:60",
        views: "80"
      }
    ],
    food: [
      {
        id: 4,
        title: "제주 동문시장 8번 게이트 야시장",
        channel: "Unknown",
        thumbnail: thumbnailDongmunMarket,
        url: "https://www.youtube.com/shorts/t9jnlO_MhK4",
        description: "닭꼬치, 흑돼지 오겹말이, 떡갈비, 랍스터 등 야시장 먹거리",
        duration: "0:60",
        views: "14K"
      },
      {
        id: 5,
        title: "2025년 제주도 로컬맛집 BEST 30",
        channel: "스티브잡부",
        thumbnail: thumbnailLocalFood,
        url: "https://www.youtube.com/watch?v=Ho31v4yryLY",
        description: "팔복만두, 블루핀, 제라진국밥 등 현지인 추천 맛집 30곳",
        duration: "25:39",
        views: "302K"
      }
    ],
    hidden: [
      {
        id: 6,
        title: "잘 알려지지 않은 제주 여행지 5곳",
        channel: "GoGoMong 고고몽",
        thumbnail: thumbnailHiddenGems,
        url: "https://www.youtube.com/watch?v=zKkEYgVy-gA",
        description: "마라도, 추자도 나바론 하늘길, 안덕계곡, 군산오름, 박수기정",
        duration: "10:50",
        views: "202K"
      },
      {
        id: 7,
        title: "제주도여행 숨겨진 명소 여행지 10",
        channel: "살란다",
        thumbnail: thumbnailHiddenGemsNew,
        url: "https://www.youtube.com/watch?v=VHejfuoCfh8",
        description: "한수리 방파제, 관음사, 돌문화공원, 오조포구, 노루생태공원 등 제주도민이 꼽은 힐링 여행 코스",
        duration: "56K",
        views: "1 year ago"
      }
    ]
  }

  // Get all videos for display
  const getAllVideos = () => {
    return [...videoData.beaches, ...videoData.oreums, ...videoData.food, ...videoData.hidden]
  }

  // Filter videos by category
  const getFilteredVideos = () => {
    if (selectedCategory === 'all') {
      return getAllVideos()
    }
    return videoData[selectedCategory] || []
  }

  // Get locations by category
  const getLocationsByCategory = (category) => {
    if (category === 'all') {
      return [...locationData.beaches, ...locationData.oreums, ...locationData.food, ...locationData.hidden]
    }
    return locationData[category] || []
  }

  const categories = [
    { id: 'all', name: '전체', icon: '🌊', count: getAllVideos().length },
    { id: 'beaches', name: '해변 & 해수욕장', icon: '🏖️', count: videoData.beaches.length },
    { id: 'oreums', name: '오름 & 산', icon: '⛰️', count: videoData.oreums.length },
    { id: 'food', name: '전통시장 & 맛집', icon: '🍜', count: videoData.food.length },
    { id: 'hidden', name: '숨은 명소', icon: '💎', count: videoData.hidden.length }
  ]

  const getCategoryIcon = (category) => {
    const categoryMap = {
      beaches: '🏖️',
      oreums: '⛰️',
      food: '🍜',
      hidden: '💎'
    }
    return categoryMap[category] || '📍'
  }

  const getCategoryColor = (category) => {
    const colorMap = {
      beaches: 'text-blue-600 bg-blue-50',
      oreums: 'text-green-600 bg-green-50',
      food: 'text-orange-600 bg-orange-50',
      hidden: 'text-purple-600 bg-purple-50'
    }
    return colorMap[category] || 'text-gray-600 bg-gray-50'
  }

  const LocationModal = () => (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[80vh] overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-900">제주도 여행지 위치 정보</h2>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => setShowLocationModal(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
        
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          <div className="mb-6">
            <p className="text-gray-600 mb-4">
              영상에서 소개된 장소들의 위치 정보입니다. 지역별로 묶어서 효율적인 여행 동선을 계획해보세요.
            </p>
          </div>

          {/* Category Filters for Modal */}
          <div className="flex flex-wrap gap-2 mb-6">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                size="sm"
                className={`${
                  selectedCategory === category.id 
                    ? 'bg-teal-600 text-white' 
                    : 'bg-white text-gray-700 hover:bg-teal-50'
                }`}
              >
                <span className="mr-1">{category.icon}</span>
                {category.name}
              </Button>
            ))}
          </div>

          {/* Location Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {getLocationsByCategory(selectedCategory).map((location, index) => {
              // Determine category for styling
              let category = 'hidden'
              if (locationData.beaches.includes(location)) category = 'beaches'
              else if (locationData.oreums.includes(location)) category = 'oreums'
              else if (locationData.food.includes(location)) category = 'food'

              return (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`text-lg p-2 rounded-full ${getCategoryColor(category)}`}>
                        {getCategoryIcon(category)}
                      </span>
                      <Badge variant="secondary" className={getCategoryColor(category)}>
                        {categories.find(cat => cat.id === category)?.name || '기타'}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg">{location.name}</CardTitle>
                    <CardDescription className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {location.region}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-gray-600">{location.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Regional Guide */}
          <div className="mt-8 p-4 bg-teal-50 rounded-lg">
            <h3 className="font-semibold text-teal-800 mb-2">💡 여행 동선 팁</h3>
            <div className="text-sm text-teal-700 space-y-1">
              <p><strong>북부 지역:</strong> 제주시, 애월, 한림 - 공항 근처, 서쪽 해안 일몰 명소</p>
              <p><strong>동부 지역:</strong> 구좌, 성산 - 월정리, 성산일출봉, 일출 명소</p>
              <p><strong>남부 지역:</strong> 서귀포, 중문 - 중문관광단지, 남쪽 해안</p>
              <p><strong>서부 지역:</strong> 한경, 대정 - 차귀도, 마라도 출발지</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const CourseModal = () => (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-6xl w-full max-h-[85vh] overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-900">제주도 2박 3일 추천 여행 코스</h2>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => setShowCourseModal(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
        
        <div className="p-6 overflow-y-auto max-h-[70vh]">
          <div className="mb-6">
            <p className="text-gray-600 mb-4">
              제주시와 서귀포시를 기준으로 한 2박 3일 추천 여행 코스입니다. 각 지역의 특색을 살린 다양한 테마로 구성했습니다.
            </p>
          </div>

          {/* Jeju City Courses */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-2xl">🏙️</span>
              제주시 기준 코스
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {travelCourses.jeju.map((course) => (
                <Card key={course.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="bg-blue-50 text-blue-600">
                        {course.duration}
                      </Badge>
                      <Badge variant="outline" className="text-blue-600 border-blue-200">
                        {course.theme}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg">{course.title}</CardTitle>
                    <CardDescription className="text-gray-600">
                      {course.subtitle}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <h4 className="font-semibold text-sm text-gray-700 mb-2">주요 명소</h4>
                      <div className="flex flex-wrap gap-1">
                        {course.highlights.map((highlight, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs bg-gray-100 text-gray-600">
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-3">
                      {course.days.map((day) => (
                        <div key={day.day} className="border-l-2 border-blue-200 pl-3">
                          <div className="flex items-center gap-2 mb-1">
                            <Calendar className="h-4 w-4 text-blue-600" />
                            <span className="font-semibold text-sm text-blue-600">
                              {day.day}일차
                            </span>
                            <span className="text-sm text-gray-600">{day.title}</span>
                          </div>
                          <ul className="text-xs text-gray-600 space-y-1">
                            {day.activities.map((activity, idx) => (
                              <li key={idx} className="flex items-start gap-1">
                                <Clock className="h-3 w-3 mt-0.5 text-gray-400" />
                                {activity}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Seogwipo City Courses */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-2xl">🌊</span>
              서귀포시 기준 코스
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {travelCourses.seogwipo.map((course) => (
                <Card key={course.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="bg-green-50 text-green-600">
                        {course.duration}
                      </Badge>
                      <Badge variant="outline" className="text-green-600 border-green-200">
                        {course.theme}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg">{course.title}</CardTitle>
                    <CardDescription className="text-gray-600">
                      {course.subtitle}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <h4 className="font-semibold text-sm text-gray-700 mb-2">주요 명소</h4>
                      <div className="flex flex-wrap gap-1">
                        {course.highlights.map((highlight, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs bg-gray-100 text-gray-600">
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-3">
                      {course.days.map((day) => (
                        <div key={day.day} className="border-l-2 border-green-200 pl-3">
                          <div className="flex items-center gap-2 mb-1">
                            <Calendar className="h-4 w-4 text-green-600" />
                            <span className="font-semibold text-sm text-green-600">
                              {day.day}일차
                            </span>
                            <span className="text-sm text-gray-600">{day.title}</span>
                          </div>
                          <ul className="text-xs text-gray-600 space-y-1">
                            {day.activities.map((activity, idx) => (
                              <li key={idx} className="flex items-start gap-1">
                                <Clock className="h-3 w-3 mt-0.5 text-gray-400" />
                                {activity}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Travel Tips */}
          <div className="mt-8 p-4 bg-teal-50 rounded-lg">
            <h3 className="font-semibold text-teal-800 mb-2">💡 여행 코스 이용 팁</h3>
            <div className="text-sm text-teal-700 space-y-1">
              <p><strong>제주시 기준:</strong> 공항 접근성이 좋고, 북부와 동부/서부 해안 탐방에 유리</p>
              <p><strong>서귀포시 기준:</strong> 남부 해안과 한라산 남쪽 지역 탐방에 유리, 자연 경관이 뛰어남</p>
              <p><strong>렌터카 필수:</strong> 모든 코스는 렌터카 이용을 전제로 구성되었습니다</p>
              <p><strong>날씨 확인:</strong> 오름 등반과 해양 액티비티는 날씨에 따라 일정 조정이 필요합니다</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-teal-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <h1 className="text-xl font-bold text-teal-600">제주 Vlog 큐레이션</h1>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#" className="text-gray-600 hover:text-teal-600 transition-colors">홈</a>
              <a href="#categories" className="text-gray-600 hover:text-teal-600 transition-colors">카테고리</a>
              <button 
                onClick={() => setShowLocationModal(true)}
                className="text-gray-600 hover:text-teal-600 transition-colors"
              >
                지도보기
              </button>
              <button 
                onClick={() => setShowCourseModal(true)}
                className="text-gray-600 hover:text-teal-600 transition-colors"
              >
                내 여행코스
              </button>
            </div>
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[70vh] bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${heroImage})`}}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">나만의 추천 제주 여행</h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">유튜버들이 발견한 제주의 숨은 보석들을 만나보세요</p>
            <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 text-lg">
              <Play className="mr-2 h-5 w-5" />
              여행 시작하기
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">제주도, 자연이 만든 걸작</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              화산 활동으로 형성된 독특한 지형과 에메랄드빛 바다, 그리고 따뜻한 사람들이 만들어내는 제주만의 특별한 매력을 경험해보세요.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌋</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">368개의 오름</h3>
              <p className="text-gray-600">화산 활동으로 만들어진 제주만의 독특한 지형</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏖️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">에메랄드 바다</h3>
              <p className="text-gray-600">세계가 인정한 아름다운 해변과 맑은 바다</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🍊</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">특별한 문화</h3>
              <p className="text-gray-600">독특한 방언과 전통, 그리고 맛있는 향토 음식</p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Categories Section */}
      <section id="categories" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">테마별 여행 영상</h2>
            <p className="text-lg text-gray-600">관심 있는 테마를 선택하여 맞춤형 여행 정보를 확인해보세요</p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full transition-all duration-200 ${
                  selectedCategory === category.id 
                    ? 'bg-teal-600 text-white shadow-lg' 
                    : 'bg-white text-gray-700 hover:bg-teal-50 border-gray-200'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
                <Badge variant="secondary" className="ml-2 bg-gray-100 text-gray-600">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>

          {/* Video Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getFilteredVideos().map((video) => (
              <Card key={video.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group bg-white">
                <div className="relative">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded text-sm font-medium">
                    <Play className="inline w-3 h-3 mr-1" />
                    YouTube
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg leading-tight group-hover:text-teal-600 transition-colors">
                    {video.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-gray-600">
                    {video.channel} • {video.views} views
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {video.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <Button 
                      size="sm" 
                      className="bg-teal-600 hover:bg-teal-700 text-white"
                      onClick={() => window.open(video.url, '_blank')}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      영상 보기
                    </Button>
                    <Button variant="ghost" size="sm" className="text-gray-500 hover:text-red-500">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div id="map" className="text-center">
              <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-10 w-10 text-teal-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">위치 정보 보기</h3>
              <p className="text-gray-600 mb-6">
                영상에서 소개된 여행지들의 위치 정보를 확인하고 효율적인 여행 경로를 계획해보세요
              </p>
              <Button 
                variant="outline" 
                className="border-teal-600 text-teal-600 hover:bg-teal-50"
                onClick={() => setShowLocationModal(true)}
              >
                위치 정보 열기
              </Button>
            </div>
            
            <div id="course" className="text-center">
              <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Route className="h-10 w-10 text-teal-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">내 여행 코스 만들기</h3>
              <p className="text-gray-600 mb-6">
                제주시와 서귀포시 기준 2박 3일 추천 여행 코스를 확인하고 나만의 여행을 계획해보세요
              </p>
              <Button 
                variant="outline" 
                className="border-teal-600 text-teal-600 hover:bg-teal-50"
                onClick={() => setShowCourseModal(true)}
              >
                코스 만들기
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">© 2025 제주 Vlog 큐레이션. Made with ❤️ for Jeju travelers.</p>
        </div>
      </footer>

      {/* Location Modal */}
      {showLocationModal && <LocationModal />}

      {/* Course Modal */}
      {showCourseModal && <CourseModal />}
    </div>
  )
}

export default App

