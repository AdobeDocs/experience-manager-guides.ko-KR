---
title: Dispatcher 구성
description: Dispatcher 구성 방법 알아보기
exl-id: 525de1c3-5a79-4d65-89b4-ca05ae660c2c
feature: Installation
role: Admin
level: Experienced
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '302'
ht-degree: 5%

---

# Dispatcher 구성 {#id213BCM0M05U}

AEM Guides과 함께 Dispatcher on AEM 작성자 인스턴스를 사용하려는 경우 다음과 같은 추가 구성을 수행하여 설정을 완료해야 합니다.

>[!NOTE]
>
> Dispatcher는 Adobe Experience Manager의 캐싱 및/또는 로드 밸런싱 도구입니다. Dispatcher 사용에 대한 자세한 내용은 [Dispatcher 개요](https://experienceleague.adobe.com/docs/experience-manager-dispatcher/using/dispatcher.html?lang=en)를 참조하십시오.

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

AEM Guides과 함께 Dispatcher을 사용하는 경우 작성자가 DITA 맵 및 주제 파일을 HTML으로 렌더링하여 \로(원시 텍스트 형식 대신) 컨텐츠를 예상대로 볼 수 있도록 해야 합니다.

mime.types 파일을 업데이트하려면 다음 단계를 수행하십시오.

1. SSH를 사용하여 Dispatcher 서버에 연결하고 httpd.conf 파일을 찾습니다.

1. &quot; mime.types&quot; 파일의 경로를 확인하십시오.

1. mime.types 파일을 열고 &quot; text/html&quot;을 검색합니다. &quot;text/html&quot;의 기본 매핑은 다음과 같습니다.

   `text/html html htm`

1. 다음과 같이 ditamap 및 dita 확장을 추가하여 매핑을 업데이트합니다.

   `text/html html htm ditamap dita`

1. 파일을 저장하고 닫습니다.


이 구성 업데이트를 통해 Dispatcher에서 렌더링한 DITA 맵 및 주제 파일이 Assets UI에서 HTML으로 표시됩니다.

## 사용자 환경 설정 요청 URL 허용

AEM Guides과 함께 Dispatcher을 사용할 때 작성자 인스턴스에 앞에 Dispatcher가 있는 경우 다음 두 가지 사항을 변경합니다.

- POST 요청 URL을 허용 목록에 추가합니다. 샘플 &quot; `/filters`&quot; 규칙이 아래에 제공됩니다. - 이 규칙을 Dispatcher 구성 파일에 추가하십시오.

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

**상위 항목:**&#x200B;[&#x200B;다운로드 및 설치](download-install.md)
