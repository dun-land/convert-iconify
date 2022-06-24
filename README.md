# [Iconify convert API][LINK_API]
<b align="center">
    ⚠️ 대부분의 경우 SVG를 사용하는 것이 좋습니다.
    이 프로젝트는 SVG를 지원하지 않는 곳에서 사용하기 위해서 만들어졌습니다.
</b>

## URL
 - 기본 URL: https://convert-iconify.vercel.app/api
 - 짧은 URL: https://iconify.dun.land/api
 
 ### 셀프 호스팅
 [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fdungsil%2Fconvert-iconify)

## 사용법
`api.iconify.design`를 `iconify.dun.land/api` 로 변경하여 간단하게 사용하실 수 있습니다.

### 지원 형식
 - PNG
 - JPEG
   * 배경색이 흰색(#fff)으로 대체됩니다.
 - ~~SVG~~
    * SVG는 테스트를 위해 지원하며 실제 사용하지 마세요. 환경에 따라 5배 느리게 로딩됩니다.

## 예제

### 기본 사용법
![#](https://convert-iconify.vercel.app/api/logos:github.png)
```
https://convert-iconify.vercel.app/api/logos:github.png
```

### 커스터마이징
커스터마이징의 경우 iconify의 API를 그대로 사용합니다.

![#](https://convert-iconify.vercel.app/api/icons8:idea.png?width=100&height=100)
```
https://convert-iconify.vercel.app/api/mdi:ab-testing.png?width=100&height=100
```

![#](https://convert-iconify.vercel.app/api/icons8:idea.png?color=%23fcc419&width=100&height=100)
```
https://convert-iconify.vercel.app/api/icons8:idea.webp?color=%23fcc419&width=100&height=100
```

## 라이선스
이 프로젝트의 소스코드는 퍼블릭 도메인이며 자유롭게 사용하실 수 있습니다.
아이콘에는 퍼블릭도메인이 제공되지 않으며 원 출처에서 확인해주시기 바랍니다.

<!-- variables -->
[LINK_API]: https://iconify.dun.land/api
