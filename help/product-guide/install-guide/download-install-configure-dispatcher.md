---
title: Dispatcher 구성
description: Dispatcher 구성 방법 알아보기
exl-id: 525de1c3-5a79-4d65-89b4-ca05ae660c2c
source-git-commit: 5e0584f1bf0216b8b00f00b9fe46fa682c244e08
workflow-type: tm+mt
source-wordcount: '302'
ht-degree: 5%

---

# Dispatcher 구성 {#id213BCM0M05U}

AEM Guides와 함께 AEM 작성자 인스턴스에서 Dispatcher를 사용하려는 경우 다음 추가 구성을 수행하여 설정을 완료해야 합니다.

>[!NOTE]
>
> Dispatcher는 Adobe Experience Manager의 캐싱 및/또는 로드 밸런싱 도구입니다. Dispatcher 사용에 대한 자세한 내용은 을 참조하십시오. [Dispatcher 개요](https://experienceleague.adobe.com/docs/experience-manager-dispatcher/using/dispatcher.html?lang=en).

## URL에서 AllowEncodedSlashes 활성화

인코딩된 슬래시가 있는 URL은 AEM Dispatcher 설정에서 기본적으로 활성화되지 않지만 AEM Guides에서 작업하는 동안 활성화해야 합니다. 이렇게 하려면 다음 코드 조각에 표시된 대로 Apache 구성에서 AllowEncodedSlashes 매개 변수를 On으로 설정해야 합니다.

```XML
<VirtualHost *:80>
                ServerName www.geometrixx-outdoors.com
                **AllowEncodedSlashes On**
                <Directory />
                <IfModule disp_apache2.c>
                SetHandler dispatcher-handler
                </IfModule>
                Options FollowSymLinks
                AllowOverride None
                </Directory>
                </VirtualHost>
            
```

## DITA에 대한 mime.types 파일 구성

AEM Guides에서 Dispatcher를 사용할 때 DITA 맵과 주제 파일이 작성자가 원시 텍스트 형식 대신 \에 기대한 대로 컨텐츠를 볼 수 있는 HTML으로 렌더링되어 있는지 확인해야 합니다.

mime.types 파일을 업데이트하려면 다음 단계를 수행하십시오.

1. SSH를 사용하여 Dispatcher 서버에 연결하고 httpd.conf 파일을 찾습니다.

1. &quot; mime.types&quot; 파일의 경로를 확인하십시오.

1. mime.types 파일을 열고 &quot; text/html&quot;을 검색합니다. &quot;text/html&quot;의 기본 매핑은 다음과 같습니다.

   `text/html html htm`

1. 다음과 같이 ditamap 및 dita 확장을 추가하여 매핑을 업데이트합니다.

   `text/html html htm ditamap dita`

1. 파일을 저장하고 닫습니다.


이 구성 업데이트를 사용하면 Dispatcher에서 렌더링한 DITA 맵 및 주제 파일이 Assets UI에 HTML으로 표시됩니다.

## 사용자 환경 설정 요청 URL 허용

AEM Guides와 함께 Dispatcher를 사용할 때 작성자 인스턴스에 앞에 Dispatcher가 있는 경우 다음 두 가지 사항을 변경합니다.

- POST 요청 URL을 허용 목록에 추가합니다. 샘플 &quot; `/filters`&quot;규칙이 아래에 제공됨 - 이 규칙을 Dispatcher 구성 파일에 추가합니다.

```json
/xxxx {/type "allow" /method "POST" /url "/home/users/*/preferences"}
```

- URL 패턴 &quot; /libs/cq/security/userinfo.json&quot;이 Author Dispatcher에 캐시되지 않았는지 확인하고 author\_dispatcher.any에 규칙 \(아래\)을 추가하십시오.

```json
/xxxx {
                /glob "/libs/cq/security/userinfo.json"
                /type "deny"
                }
```

**상위 항목:**[&#x200B;다운로드 및 설치](download-install.md)
