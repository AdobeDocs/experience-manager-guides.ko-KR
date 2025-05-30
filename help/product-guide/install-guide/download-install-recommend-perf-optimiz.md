---
title: 성능 최적화를 위한 Recommendations
description: 성능 최적화를 위한 Recommendations 알아보기
exl-id: b2a836a0-de82-4d89-aae3-43276997da74
feature: Performance Optimization
role: Admin
level: Experienced
source-git-commit: b28b7d96cce69f677b0bcf891b94d7ac84eb1eb0
workflow-type: tm+mt
source-wordcount: '907'
ht-degree: 0%

---

# 성능 최적화를 위한 Recommendations {#id213BD0JG0XA}

## 데이터 저장소 구성 \(필수\)

**변경 내용**
`minRecordLength` 속성을 `org.apache.jackrabbit.oak.plugins.blob.datastore.FileDataStore.` 구성 아래의 `100` 값으로 설정합니다. 파일 날짜 저장소 및 S3 데이터 저장소에 대한 자세한 내용은 [AEM 6](https://helpx.adobe.com/kr/experience-manager/6-5/sites/deploying/using/data-store-config.html)에서 노드 저장소 및 데이터 저장소 구성 문서를 참조하십시오.

>[!NOTE]
>
> S3 데이터 저장소의 경우 데이터 저장소에서 컨텐츠를 유지 관리하는 데 드는 비용은 요청 수에 따라 다릅니다. 따라서 S3로 이 설정을 수행할 경우 요청당 설정 비용 및 캐시 크기도 고려해야 합니다.

**구성할 때**
초기 설정 후 콘텐츠가 마이그레이션되기 전입니다. 모든 새 콘텐츠가 세그먼트 저장소 대신 데이터 저장소에 저장되도록 하는 기존 시스템에서도 이 변경 작업을 수행해야 합니다.

**이 변경 결과**
DITA 파일은 세그먼트 저장소가 아닌 데이터 저장소에 저장됩니다. 이렇게 하면 세그먼트 저장소 크기가 권장 제한 미만으로 유지되므로 시스템의 응답성이 향상됩니다.

## Lucene 인덱스 업데이트 \(필수\)

**변경 내용**
oak:index/lucene에서 /var/dxml을 제외합니다.

>[!NOTE]
>
> AEM Guides은 Lucene 색인을 사용하여 /var/dxml 노드에서 컨텐츠를 검색하지 않습니다.

**구성할 때**
콘텐츠를 마이그레이션하기 전에 새 시스템에서 이 변경 작업을 수행하는 경우 oak:index/lucene만 업데이트하면 됩니다. 그렇지 않으면 콘텐츠가 이미 마이그레이션된 기존 시스템에서 oak:index/lucene를 변경한 후 Lucene \(*완료하는 데 몇 시간이 걸릴 수 있음*\)에 대한 인덱스를 다시 빌드하십시오.

**이 변경 결과**
이 변경 사항으로 인해 /var/dxml 노드가 인덱싱되어 세그먼트 저장소에 저장되지 않습니다.

## Java 메모리 최적화 \(필수\)

**변경 내용**
JVM 시작 매개변수는 인프라 및 디스크 크기에 따라 신중하게 조정해야 합니다. 이상적인 구성에 액세스하려면 Adobe 지원 센터에 문의하는 것이 좋습니다. 그러나 다음 구성을 직접 시도할 수 있습니다.

- JVM 힙 크기를 사용 가능한 총 메모리의 1/4 이상으로 설정합니다. `-Xmx<size>` 매개 변수를 사용하여 힙 메모리 크기를 설정합니다. -`Xms`의 값을 `-Xmx`과(와) 동일하게 설정합니다.

- `-XX:+HeapDumpOnOutOfMemoryError`을(를) 사용하도록 설정하고 `-XX:HeapDumpPath=</path/to/folder` `>`의 경로를 설정합니다.

- 다음과 같이 Java GC 로그 활성화:

`* -XX:+PrintGCDateStamps`

`* -verbose:gc`

`* -XX:+PrintGCDetails`

`* -XX:+PrintTenuringDistribution`

`* -Xloggc:</path/to/gc.log>`

- 일반적으로 Java 11의 경우 G1GC \(`-XX:+UseG1GC`\)를 사용하고 Java 8의 경우 CMS \(-`XX:+UseConcMarkSweepGC`\)를 사용합니다.

- `-XX:NewRatio`을(를) 사용하여 젊은 세대 메모리 크기를 제어합니다. 기본값은 2로, 메모리의 1/3을 젊은 세대에 사용함을 의미합니다. 빠르게 생성 및 소멸되는 개체가 많으므로 값 1을 사용하면 메모리의 1/2을 젊은 세대에 할당할 수 있습니다.

- `-XX:MaxTenuringThreshold`을(를) 사용하여 이전 생성으로 승격되는 개체 수를 제어합니다. 15 \(default\) 값을 사용하면 객체가 이전 세대로 승격될 때 시간을 지연할 수 있습니다.

**구성할 때**
기존 시스템에서 이 변경 작업을 수행하는 경우 시스템을 다시 시작해야 합니다. 새로 설치하는 경우 시스템을 시작하기 전에 시작 스크립트 \(.bat 또는 .sh\) 파일에서 이 변경 사항을 수행해야 합니다.

**이 변경 결과**
이것은 최적의 힙 크기를 얻고 GC의 실행을 규제하게 된다.

## 작성자 인스턴스의 클라이언트 라이브러리 축소 \(선택 사항\)

**변경 내용**
작성 인스턴스에서 클라이언트 라이브러리를 축소하도록 설정해야 합니다. 이렇게 하면 사용자가 다른 위치에서 시스템을 탐색할 때 다운로드할 바이트가 줄어듭니다. 이렇게 변경하려면 Felix 콘솔에서 **HTML 라이브러리 관리자**&#x200B;의 구성을 설정하십시오.

**구성할 때**
이 작업은 런타임에 Felix 콘솔을 통해 수행하거나 코드 배포를 통해 수행할 수 있습니다.

**이 변경 결과**
이 변경 사항은 클라이언트 라이브러리를 로드하기 위해 전송되는 바이트 수가 적으므로 작성자 인스턴스에서 페이지를 로드하는 시간을 향상시킵니다.

## 동시 게시 스레드 구성 \(사용 사례에 따라 필수입니다\)

**변경 내용**
DITA-OT를 사용하여 출력을 게시하고 여러 동시 게시 스레드도 정의된 경우 이 변경이 필요합니다.

기본적으로 AEM Guides은 게시 스레드를 CPU+1의 수로 설정합니다. 그러나 이 값을 전체 CPU 수의 절반 \(1/2\) 또는 1/3 \(1/3\)로 설정하는 것이 좋습니다. 이렇게 하려면 권장 사항에 따라 `com.adobe.fmdita.publish.manager.PublishThreadManagerImpl` 구성 아래의 **생성 풀 크기** 속성을 설정하십시오.

**구성할 때**
이 작업은 런타임에 Felix 콘솔을 통해 수행하거나 코드 배포를 통해 수행할 수 있습니다.

**이 변경 결과**
이 변경 사항은 실행 중인 작성자 인스턴스에서 모든 리소스가 게시 작업에 할당되지 않도록 합니다. 이렇게 하면 작성자가 시스템 리소스를 사용할 수 있으므로 사용자 경험이 향상됩니다.

## AEM 사이트 출력 생성을 위한 노드의 배치 크기 구성 \(사용 사례에 따라 필수입니다.\)

**변경 내용**
AEM Sites 출력을 생성하는 경우 이 변경이 필요합니다.

`com.adobe.fmdita.config.ConfigManager` 아래의 **힙에서 AEM 사이트 페이지 제한** 속성을 시스템 구성에 따라 숫자로 설정합니다. 이 속성은 사이트 페이지가 생성될 때 커밋될 노드의 배치 크기를 정의합니다. 예를 들어, CPU 수와 힙 크기가 더 큰 시스템에서는 기본값을 `500`에서 더 큰 수로 늘릴 수 있습니다. 이 속성에 대한 최적의 값을 얻으려면 변경된 값으로 실행을 테스트해야 합니다.

**구성할 때**
이 작업은 런타임에 Felix 콘솔을 통해 수행하거나 코드 배포를 통해 수행할 수 있습니다.

**이 변경 결과**
**힙에서 AEM 사이트 페이지 제한** 속성의 수를 늘리면 AEM 사이트 출력 생성 프로세스를 최적화합니다.


**상위 항목:**&#x200B;[&#x200B;다운로드 및 설치](download-install.md)
