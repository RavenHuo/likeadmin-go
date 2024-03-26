package core

import (
	"encoding/json"
	"time"
)

const DateFormat = "2006-01-02"
const TimeFormat = "2006-01-02 15:04:05"

// TsTime 自定义时间格式
type TsTime int64
type OnlyRespTsTime time.Time

func (tst *TsTime) UnmarshalJSON(bs []byte) error {
	var date string
	err := json.Unmarshal(bs, &date)
	if err != nil {
		return err
	}
	tt, _ := time.ParseInLocation(TimeFormat, date, time.Local)
	*tst = TsTime(tt.Unix())
	return nil
}

func (tst TsTime) MarshalJSON() ([]byte, error) {
	tt := time.Unix(int64(tst), 0).Format(TimeFormat)
	return json.Marshal(tt)
}

func (otst OnlyRespTsTime) MarshalJSON() ([]byte, error) {
	tt := time.Time(otst).Format(TimeFormat)
	return json.Marshal(tt)
}

func (otst *OnlyRespTsTime) UnmarshalJSON(data []byte) error {
	var timeStr string
	if err := json.Unmarshal(data, &timeStr); err != nil {
		return err
	}
	parsedTime, err := time.Parse("2006-01-02 15:04:05", timeStr)
	if err != nil {
		return err
	}
	*otst = OnlyRespTsTime(parsedTime)
	return nil
}
func (otst OnlyRespTsTime) IsZero() bool {
	return time.Time(otst).IsZero()
}
